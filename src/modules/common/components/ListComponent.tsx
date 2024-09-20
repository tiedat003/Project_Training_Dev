import 'bootstrap/dist/css/bootstrap.min.css';
export default function ListComponent(props: { type: string; value: string; onChange: Function }) {
    const { type } = props;
    return (
        <>
            <input
                type={type}
                className="form-control"
                placeholder='Text'
                aria-label="Username"
                aria-describedby="basic-addon1" />
        </>
    )
}
