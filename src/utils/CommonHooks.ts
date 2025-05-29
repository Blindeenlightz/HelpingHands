/**
 * useForm - a custom React hook for managing form fields state and change handlers.
 *
 * Initializes form data from an object of initialValues and provides
 * a generic onChange handler to update form state by input name.
 *
 * @template T - Shape of the form fields object (keys correspond to input names).
 * @param initialValues - Initial form fields values as an object keyed by input names.
 * @returns An object containing:
 *   - form: Current form state of type T.
 *   - handleChange: A change event handler to wire up to inputs/selects/textareas.
 *   - setForm: State setter to reset or programmatically update form data.
 *
 * @example
 * ```tsx
 * import React, { useEffect } from 'react';
 * import { useForm } from './CommonHooks';
 *
 * function MyForm({ initialValues, onSubmit }) {
 *   const { form, handleChange, setForm } = useForm(initialValues);
 *
 *   // Reset form when initial fields change (e.g., modal opens)
 *   useEffect(() => {
 *     setForm(initialValues);
 *   }, [initialValues, setForm]);
 *
 *   function submitHandler(e: React.FormEvent) {
 *     e.preventDefault();
 *     onSubmit(form);
 *   }
 *
 *   return (
 *     <form onSubmit={submitHandler}>
 *       <input
 *         name="name"
 *         value={form.name}
 *         onChange={handleChange}
 *       />
 *       <input
 *         name="amount"
 *         value={form.amount}
 *         onChange={handleChange}
 *       />
 *       <button type="submit">Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */
import { useState, useCallback } from "react";

export function useForm<T extends object>(initialValues: T) {
    const [form, setForm] = useState(initialValues);

    const handleChange = useCallback(
        (
            e: React.ChangeEvent<
                HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
            >
        ) => {
            const { name, value } = e.target;
            setForm((prev) => ({ ...prev, [name]: value }));
        },
        []
    );

    return { form, handleChange, setForm };
}
