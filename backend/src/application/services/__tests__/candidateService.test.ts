import { createCandidate } from '../candidateServiceNew';
import prisma from '../../../prisma/client';
import { Candidate } from '@prisma/client';

jest.mock('../../../prisma/client', () => ({
    __esModule: true,
    default: {
        candidate: {
            create: jest.fn(),
        },
    },
}));

const mockCreate = prisma.candidate.create as jest.MockedFunction<typeof prisma.candidate.create>;

describe('createCandidate Service - TDD Backend Phase', () =>
{
    beforeEach(() =>
    {
        jest.clearAllMocks();
    });

    describe('Validación de esquema de datos', () =>
    {
        test('debe aceptar un candidato con datos válidos mínimos', async () =>
        {
            const validCandidate = {
                firstName: 'Juan',
                lastName: 'Pérez',
                email: 'juan.perez@example.com'
            };

            const mockSavedCandidate: Candidate = {
                id: 1,
                ...validCandidate,
                phone: null,
                address: null
            };

            mockCreate.mockResolvedValue(mockSavedCandidate);

            const result = await createCandidate(validCandidate);

            expect(result).toHaveProperty('id');
            expect(result.email).toBe(validCandidate.email);
        });

        test('debe rechazar un candidato sin firstName', async () =>
        {
            const invalidCandidate = {
                lastName: 'Pérez',
                email: 'juan.perez@example.com'
            };

            await expect(createCandidate(invalidCandidate)).rejects.toThrow();
        });

        test('debe rechazar un candidato sin email', async () =>
        {
            const invalidCandidate = {
                firstName: 'Juan',
                lastName: 'Pérez'
            };

            await expect(createCandidate(invalidCandidate)).rejects.toThrow();
        });
    });

    describe('Persistencia en base de datos (mock)', () =>
    {
        test('debe llamar a prisma.candidate.create con los datos correctos', async () =>
        {
            const validCandidate = {
                firstName: 'María',
                lastName: 'García',
                email: 'maria.garcia@example.com',
                phone: '123456789'
            };

            const mockSavedCandidate: Candidate = {
                id: 2,
                ...validCandidate,
                address: null
            };

            mockCreate.mockResolvedValue(mockSavedCandidate);

            await createCandidate(validCandidate);

            expect(mockCreate).toHaveBeenCalled();
        });

        test('NO debe llamar a la base de datos si los datos son inválidos', async () =>
        {
            const invalidCandidate = {
                firstName: 'Juan'
                // Falta email y lastName
            };

            await expect(createCandidate(invalidCandidate)).rejects.toThrow();
            expect(mockCreate).not.toHaveBeenCalled();
        });

        test('debe manejar errores de unicidad de email (P2002)', async () =>
        {
            const duplicateCandidate = {
                firstName: 'Pedro',
                lastName: 'López',
                email: 'pedro.lopez@example.com'
            };

            const prismaError = new Error('Unique constraint failed');
            (prismaError as any).code = 'P2002';

            mockCreate.mockRejectedValue(prismaError);

            await expect(createCandidate(duplicateCandidate)).rejects.toThrow('The email already exists in the database');
        });
    });

    describe('Datos complejos (educación y experiencia)', () =>
    {
        test('debe procesar candidato con educación', async () =>
        {
            const candidateWithEducation = {
                firstName: 'Ana',
                lastName: 'Martínez',
                email: 'ana.martinez@example.com',
                educations: [{
                    institution: 'Universidad ABC',
                    title: 'Ingeniería',
                    startDate: '2015-01-01',
                    endDate: '2019-12-31'
                }]
            };

            const mockSavedCandidate: Candidate = {
                id: 3,
                firstName: candidateWithEducation.firstName,
                lastName: candidateWithEducation.lastName,
                email: candidateWithEducation.email,
                phone: null,
                address: null
            };

            mockCreate.mockResolvedValue(mockSavedCandidate);

            const result = await createCandidate(candidateWithEducation);

            expect(result).toHaveProperty('id');
        });

        test('debe procesar candidato con experiencia laboral', async () =>
        {
            const candidateWithExperience = {
                firstName: 'Carlos',
                lastName: 'Rodríguez',
                email: 'carlos.rodriguez@example.com',
                workExperiences: [{
                    company: 'Tech Corp',
                    position: 'Developer',
                    description: 'Full stack development',
                    startDate: '2020-01-01',
                    endDate: '2023-12-31'
                }]
            };

            const mockSavedCandidate: Candidate = {
                id: 4,
                firstName: candidateWithExperience.firstName,
                lastName: candidateWithExperience.lastName,
                email: candidateWithExperience.email,
                phone: null,
                address: null
            };

            mockCreate.mockResolvedValue(mockSavedCandidate);

            const result = await createCandidate(candidateWithExperience);

            expect(result).toHaveProperty('id');
        });
    });
});
