import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        sex: '',
        nationality: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.age || isNaN(formData.age) || formData.age <= 0) newErrors.age = 'Valid age is required';
        if (!formData.sex) newErrors.sex = 'Sex is required';
        if (!formData.nationality) newErrors.nationality = 'Nationality is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            // Reset form
            setFormData({ name: '', age: '', sex: '', nationality: '' });
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
                {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
            </div>
            <div>
                <label>Sex:</label>
                <select name="sex" value={formData.sex} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                {errors.sex && <span style={{ color: 'red' }}>{errors.sex}</span>}
            </div>
            <div>
                <label>Nationality:</label>
                <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                />
                {errors.nationality && <span style={{ color: 'red' }}>{errors.nationality}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;