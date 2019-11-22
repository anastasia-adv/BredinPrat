import React from 'react';
import { Create, SimpleForm, required, SelectInput, TextInput } from 'react-admin';
var bcrypt = require('bcryptjs');


const pwdFormatter = v => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(v, salt);
    return hash;
};

//const emailValidation = 
//const validateEmail = [required(), emailValidation];

export const UserCreate = props => (
    <Create   {...props}>
        <SimpleForm redirect="show">
            <TextInput  source="username" type="email" validate={required()} resettable />
            <TextInput  source="password" parse={pwdFormatter} type="password" validate={required()} resettable />
            <SelectInput
                source="role"
                label="role"
                choices={[
                    { id: 'admin', name: 'admin' },
                    { id: 'normal', name: 'normal' },
                ]}
                validate={required()}
            />
        </SimpleForm>
    </Create >
);