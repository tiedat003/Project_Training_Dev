import 'bootstrap/dist/css/bootstrap.min.css';
export default function ButtonComponent(props: { type: string; }) {
    return (
        <>
            <button
                type="submit"
                className="btn btn-primary">
            </button>
        </>
    )
}
