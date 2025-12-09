import prisma from '../../prisma/client';
import { validateCandidateData } from '../validator';
import { Prisma } from '@prisma/client';

// Tipos de entrada
interface EducationInput
{
    institution: string;
    title: string;
    startDate: string;
    endDate?: string;
}

interface WorkExperienceInput
{
    company: string;
    position: string;
    description?: string;
    startDate: string;
    endDate?: string;
}

interface ResumeInput
{
    filePath: string;
    fileType: string;
}

export interface CandidateInput
{
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address?: string;
    educations?: EducationInput[];
    workExperiences?: WorkExperienceInput[];
    cv?: ResumeInput;
}

// Helpers para mapear datos relacionados
const mapEducations = (educations: EducationInput[]) => ({
    create: educations.map((edu) => ({
        institution: edu.institution,
        title: edu.title,
        startDate: edu.startDate,
        endDate: edu.endDate
    }))
});

const mapWorkExperiences = (experiences: WorkExperienceInput[]) => ({
    create: experiences.map((exp) => ({
        company: exp.company,
        position: exp.position,
        description: exp.description,
        startDate: exp.startDate,
        endDate: exp.endDate
    }))
});

const mapResumes = (cv: ResumeInput) => ({
    create: [{
        filePath: cv.filePath,
        fileType: cv.fileType,
        uploadDate: new Date()
    }]
});

// Función principal
export const createCandidate = async (candidateData: CandidateInput) =>
{
    // Validar datos
    validateCandidateData(candidateData);

    try
    {
        // Preparar datos básicos
        const data: Prisma.CandidateCreateInput = {
            firstName: candidateData.firstName,
            lastName: candidateData.lastName,
            email: candidateData.email,
            phone: candidateData.phone,
            address: candidateData.address,
        };

        // Añadir relaciones opcionales
        if (candidateData.educations && candidateData.educations.length > 0)
        {
            data.educations = mapEducations(candidateData.educations);
        }

        if (candidateData.workExperiences && candidateData.workExperiences.length > 0)
        {
            data.workExperiences = mapWorkExperiences(candidateData.workExperiences);
        }

        if (candidateData.cv && Object.keys(candidateData.cv).length > 0)
        {
            data.resumes = mapResumes(candidateData.cv);
        }

        // Crear candidato en la base de datos
        return await prisma.candidate.create({ data });
    } catch (error: any)
    {
        if (error.code === 'P2002')
        {
            throw new Error('The email already exists in the database');
        }
        throw error;
    }
};
