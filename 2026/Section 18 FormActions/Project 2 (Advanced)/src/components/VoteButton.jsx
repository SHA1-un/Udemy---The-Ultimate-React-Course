import { useFormStatus } from "react-dom";

export default function VoteButton({ formActionFn, children }) {
    const { pending } = useFormStatus();
    
    return <button formAction={formActionFn} disabled={pending}>
        {children}
    </button>
}