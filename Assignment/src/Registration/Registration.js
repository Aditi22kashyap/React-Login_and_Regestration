import React ,{ useState }from 'react';

const Registration = () => {
  // Your registration page JSX goes here

  //user's 1.name, 2.email, 3.password, 4.Mobile Number 5.Age 6.Address 7.Gender 8.Occupation.

  const[formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    mobilenumer:'',
    age:'',
    Address:'',
    gender:'',
    occupation:''
  });

  //State to store form validation

  const[errors,setErrors]= useState({});

  //Handler for input changes 

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prevData)=>({...prevData,[name]:value}))
  };

  const handleSubmit =(e)=>{
    e.preventDefault();

    // Validate form fields 

    const newErrors={};
    if(!formData.name){
      newErrors.name ='Name is required';
    }
    else if(!/\S+@\S+\.\S+/.test(formData.email)){
      newErrors.email='Invalid email format'
    }
    else if(!formData.password){
      newErrors.password ='Password is required';
    }
    else if(!formData.mobilenumer){
      newErrors.mobilenumer ='Mobile number is required';
    }
    else if(!formData.age){
      newErrors.age ='Age is required';
    }
    else if(!formData.Address){
      newErrors.Address ='Address is required';
    }
    else if(!formData.gender){
      newErrors.gender ='Gender is required';
    }
    else if(!formData.occupation){
      newErrors.occupation ='Occupation is required';
    }

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can proceed with submission or other actions
      console.log('Form data:', formData);
    } else {
      // There are errors, update the state with error messages
      setErrors(newErrors);
    }
  }

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for name, email, password, and other fields */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        {/* password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        {/* Mobile Number */}
        <div>
          <label>Mobile Number:</label>
          <input
            type="number"
            name="number"
            value={formData.mobilenumer}
            onChange={handleChange}
            required
          />
          {errors.mobilenumer && <div className="error">{errors.mobilenumer}</div>}
        </div>
        {/* Age */}
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          {errors.age && <div className="error">{errors.age}</div>}
        </div>
        {/* Address */}
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            required
          />
          {errors.Address && <div className="error">{errors.Address}</div>}
        </div>
        {/* Gender */}
        <div>
  <label>Gender:</label>
  <input
    type="radio"
    name="gender"
    value="male" // This value will be stored in formData.gender when selected
    checked={formData.gender === "male"} // Check if the current value matches the selected value
    onChange={handleChange}
    required
  />
  <label>Male</label>

  <input
    type="radio"
    name="gender"
    value="female" // This value will be stored in formData.gender when selected
    checked={formData.gender === "female"} // Check if the current value matches the selected value
    onChange={handleChange}
    required
  />
  <label>Female</label>
  {errors.gender && <div className="error">{errors.gender}</div>}
</div>
        {/* Occupation */}
        <div>
  <label>Occupation:</label>
  <input
    type="text"
    name="occupation" // Corrected to "occupation"
    value={formData.occupation}
    onChange={handleChange}
    required
  />
  {errors.occupation && <div className="error">{errors.occupation}</div>}
</div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
