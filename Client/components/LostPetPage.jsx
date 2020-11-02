import React from 'react';

const LostPet = props => (
    <div>
        <form className='LostPetForm' onSubmit={props.handleSubmit} >
            <h3>Owner Information</h3>
            <label>
                <h4>Name</h4>
                <input
                    type="text"
                    value={props.OwnerName}
                    onChange={props.handleChange}
                    name="OwnerName"
                    placeholder="Your Name"
                    required
                />
            </label>
            <label>
                <h4>Email</h4>
                <input
                    type="email"
                    value={props.Email}
                    onChange={props.handleChange}
                    name="Email"
                    placeholder="Email@host.com"
                    required
                />
            </label>
            <label>
                <h4>Phone Number</h4>
                <input type="tel"
                    name="Phone"
                    value={props.Phone}
                    onChange={props.handleChange}
                    placeholder="1234567891"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    maxLength='12'
                />
            </label>
            <h3>Pet Information</h3>
            <label>
                <h4>Name</h4>
                <input
                    type="text"
                    name="PetName"
                    value={props.PetName}
                    onChange={props.handleChange}
                    placeholder="Pet Name"
                    required
                />
            </label>
            <label>
                <h4>Collar Color</h4>
                <input
                    type="text"
                    name="Collar"
                    value={props.Collar}
                    onChange={props.handleChange}
                    placeholder="Color"
                />
            </label>
            <label>
                <h4>Size</h4>
                XS: <input
                    type='radio'
                    name='size'
                    value={props.size}
                    onChange={props.handleChange}
                    value="XS" />
                S: <input
                    type='radio'
                    name='size'
                    value={props.size}
                    onChange={props.handleChange}
                    value="S" />
                M: <input
                    type='radio'
                    name='size'
                    value={props.size}
                    onChange={props.handleChange}
                    value="M"
                    defaultChecked />
                L: <input
                    type='radio' n
                    ame='size'
                    value={props.size}
                    onChange={props.handleChange}
                    value="L" />
                XL: <input
                    type='radio'
                    name='size'
                    value={props.size}
                    onChange={props.handleChange}
                    value="XL" />
            </label>
            <label>
                <h4>Friendliness Rating</h4>
                Friendly: <input
                    type='radio'
                    name='Friendliness'
                    value={props.Friendliness}
                    onChange={props.handleChange}
                    value='Friendly'
                />
                Nervous:<input
                    type='radio'
                    name='Friendliness'
                    value={props.Friendliness}
                    onChange={props.handleChange}
                    value='Nervous'
                    defaultChecked
                />
                Do Not Approach:<input
                    type='radio'
                    name='Friendliness'
                    value={props.Friendliness}
                    onChange={props.handleChange}
                    value='Do Not Approach'
                />
            </label>
            <label>
                <h4>Last Known Zip Code</h4>
                <input type='number'
                    name='LastZip'
                    value={props.LastZip}
                    onChange={props.handleChange}
                    placeholder='99999'
                    required
                    maxLength='5'
                />
            </label>
            <label>
                <h4>Last Know location</h4>
                <input
                    type='text'
                    name='LastSeen'
                    value={props.LastSeen}
                    onChange={props.handleChange}
                    placeholder='location/landmark'
                    required
                />
            </label>
            <label>
                <h4>Photo of Pet:</h4>
                <input type="file"
                    name='Photo'
                    value={props.Photo}
                    onChange={props.handleChange}
                    id="input"
                    multiple
                    required
                />
            </label>
            <div>
                <input type="submit" name="Submit" />
            </div>

        </form>

    </div>
)

export default LostPet;