import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import Autocomplete from 'react-autocomplete';

function Language() {


    const languageOptions = [
        { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
        { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
        { key: 'English', text: 'English', value: 'English' },
    ]
    const [value,setValue] = useState();

    return (
        <div className="languageCon">
            <h4>Choose Your Language</h4>
            <div style={{position:"relative"}}>
            <Autocomplete
                getItemValue={(item) => item.label}
                items={[
                    { label: 'English' },
                    { label: 'Spanish' },
                    { label: 'Chinese' },
                    { label: 'Dutch' },
                    { label: 'Korea' },
                    { label: 'French' },
                    { label: 'Polish' }
                ]}
                renderItem={(item, isHighlighted) =>
                    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                        {item.label}
                    </div>
                }
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onSelect={(val) => setValue(val)}
            />
            </div>
                        <Link to= "/url" className="buttonA">Generate Link</Link>

        </div>
    );
}

export default Language;
