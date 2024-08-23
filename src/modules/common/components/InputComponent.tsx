import React from 'react'
import { FormattedMessage } from 'react-intl';

export default function InputComponent(props: { type: string; value: string; id: string; inputChange: Function; error?: string }) {
    const { type, value, id, inputChange, error } = props;
    return (
        <><div className="mb-3">
            <label htmlFor={id} className="form-label">
                <FormattedMessage id={id} />
            </label>
            <input
                type={type}
                className="form-control"
                id={id}
                value={value}
                onChange={(e) => inputChange(e)}
            ></input>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div></>
    )
}
