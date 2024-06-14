import { useState, ChangeEvent, FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../form/form.scss';

interface SimpleInputProps {
    name: string;
    label: string;
    type?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SimpleInput({ name, label, type = "text", value, onChange }: SimpleInputProps) {
    return (
        <div className="bloc">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

function Form() {
    const [email, setEmail] = useState('');
    const [objet, setObjet] = useState('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [submissionSucceeded, setSubmissionSucceeded] = useState(false);

    // Remplacez "YOUR_FORMSPREE_ID" par votre véritable identifiant.
    const [state, handleSubmit] = useForm("xwkggpbo");

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmail(value);

        // Validation regex pour l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError("L'adresse email est invalide.");
        } else {
            setEmailError(null);
        }
    };

    const handleObjetChange = (event: ChangeEvent<HTMLInputElement>) => {
        setObjet(event.target.value);
    };

    if (state.succeeded) {
        return <p>Votre message a été envoyé avec succès !</p>;
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <SimpleInput
                name="email"
                label="Email :"
                type="email"
                value={email}
                onChange={handleEmailChange}
            />
            {emailError && <p className='validation-erreur'>{emailError}</p>}
            
            <SimpleInput
                name="objet"
                label="Objet :"
                value={objet}
                onChange={handleObjetChange}
            />

            <div className="bloc">
                <label htmlFor="message">Message : </label>
                <textarea className="message" id="message" name="message" />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <button className="submit" type="submit" disabled={state.submitting || emailError !== null}>
                Envoyer
            </button>
        </form>
    );
}

export default Form;
