import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddCandidateForm from '../AddCandidateForm';

// Mock global fetch
global.fetch = jest.fn();

describe('AddCandidateForm - TDD RED Phase', () =>
{
    beforeEach(() =>
    {
        // Clear all mocks before each test
        jest.clearAllMocks();
        fetch.mockClear();
    });

    describe('Renderizado de campos básicos', () =>
    {
        test('debe renderizar el campo de Nombre (First Name)', () =>
        {
            render(<AddCandidateForm />);
            const firstNameInput = screen.getByLabelText(/nombre/i);
            expect(firstNameInput).toBeInTheDocument();
        });

        test('debe renderizar el campo de Apellidos (Last Name)', () =>
        {
            render(<AddCandidateForm />);
            const lastNameInput = screen.getByLabelText(/apellidos/i);
            expect(lastNameInput).toBeInTheDocument();
        });

        test('debe renderizar el campo de Email', () =>
        {
            render(<AddCandidateForm />);
            const emailInput = screen.getByLabelText(/email/i);
            expect(emailInput).toBeInTheDocument();
        });
    });

    describe('Validación de formulario vacío', () =>
    {
        test('debe mostrar un error de validación si se intenta enviar el formulario vacío', async () =>
        {
            render(<AddCandidateForm />);

            const submitButton = screen.getByRole('button', { name: /añadir candidato/i });
            fireEvent.click(submitButton);

            await waitFor(() =>
            {
                const errorMessage = screen.getByText(/error/i);
                expect(errorMessage).toBeInTheDocument();
            });
        });
    });

    describe('Mock de llamada al servicio', () =>
    {
        test('NO debe llamar al servicio si hay errores de validación', async () =>
        {
            render(<AddCandidateForm />);

            const submitButton = screen.getByRole('button', { name: /añadir candidato/i });
            fireEvent.click(submitButton);

            await waitFor(() =>
            {
                expect(fetch).not.toHaveBeenCalled();
            });
        });

        test('debe llamar al servicio con datos válidos', async () =>
        {
            fetch.mockResolvedValueOnce({
                status: 201,
                json: async () => ({ message: 'Candidato creado' }),
            });

            render(<AddCandidateForm />);

            // Fill in required fields
            const firstNameInput = screen.getByLabelText(/nombre/i);
            const lastNameInput = screen.getByLabelText(/apellidos/i);
            const emailInput = screen.getByLabelText(/email/i);

            fireEvent.change(firstNameInput, { target: { value: 'Juan' } });
            fireEvent.change(lastNameInput, { target: { value: 'Pérez' } });
            fireEvent.change(emailInput, { target: { value: 'juan.perez@example.com' } });

            const submitButton = screen.getByRole('button', { name: /añadir candidato/i });
            fireEvent.click(submitButton);

            await waitFor(() =>
            {
                expect(fetch).toHaveBeenCalledWith(
                    'http://localhost:3010/candidates',
                    expect.objectContaining({
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                    })
                );
            });
        });
    });
});
