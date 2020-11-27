import React, { useState } from 'react';
import Toggle from 'react-toggle';
import { useMediaQuery } from 'react-responsive';

const DarkToggle = () => {

    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
            setIsDark(prefersDark);
        }
    );

    const [isDark, setIsDark] = useState(systemPrefersDark);

    return (
        <Toggle
            className="DarkToggle"
            checked={isDark}
            onChange={event => setIsDark(event.target.checked)}
        />
    )
}

export default DarkToggle;