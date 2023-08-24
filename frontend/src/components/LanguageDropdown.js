import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
    const { i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'de', label: 'German' },
        { code: 'nl', label: 'Dutch' },
        { code: 'ja', label: 'Japanese' },
        { code: 'zh', label: 'Chinese' },
        { code: 'hi', label: 'Hindi' }
    ];

    return (
        <div className="landing-dropdown-container">
            <div className="dropdown-wrapper">
                <button className="landing-button" onClick={() => setShowDropdown(!showDropdown)}>Select Language</button>
                {showDropdown && (
                    <div className="dropdown-content">
                        {languages.map(lang => (
                            <div 
                                key={lang.code} 
                                className="landing-button dropdown-item" 
                                style={{ letterSpacing: '2px' }}  // Added letterSpacing for stretching
                                onClick={() => {
                                    i18n.changeLanguage(lang.code);
                                    setShowDropdown(false);
                                }}
                            >
                                {lang.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageDropdown;
