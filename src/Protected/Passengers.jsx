import "../CSS/Passengers.css"; 
import Logo from '../assets/Images/Logo.png';

const Passengers = () => {
  const formFields = [
    {
      label: "Mobile Number",
      type: "number",
      placeholder: "Mobile no",
      name: "mobileNumber",
      id: "Mobile",
    },
    {
      label: "Select the Date",
      type: "date",
      name: "date",
      id: "date",
    },
  ];

  const bookingOptions = [
    { label: "Hotel", name: "hotelType", options: ["None", "SingleAC", "SingleNonAC", "DoubleAC", "DoubleNonAC"] },
    { label: "Bus", name: "busType", options: ["None", "LowFloorBus", "TopOpenBus", "ArticulatedBus", "DoubleDuckerBus", "StepEntrenceBus"] },
    { label: "Train", name: "trainType", options: ["None", "VandeBharatExpress", "BulletTrain", "NilgiriExpresss", "MonoRail", "MetroRail"] },
    { label: "Aeroplane", name: "aeroplaneType", options: ["None", "FirstClass", "EconomyClass", "PremiumEconomyClass", "BusinessClass"] },
  ];

  return (
    <div className="main">
      <h1 className="main-heading">VSR Booking Form</h1>
      <div className="d-flex justify-content-center">
        <img src={Logo} alt="Logo" height="200px" width="250px" />
      </div>

      <form action="Booked.php" method="post">
        <p className="form-heading" style={{ textAlign: "center" }}>
          Enter your Name
        </p>
        <div className="row">
          <div className="col">
            <input type="text" name="firstName" placeholder="First" className="form-control" required />
          </div>
          <div className="col">
            <input type="text" name="lastName" placeholder="Last" className="form-control" required />
          </div>
        </div>

        {formFields.map((field, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={field.id} className="form-heading">
              {field.label}
            </label>
            <input
              type={field.type}
              className="form-control"
              placeholder={field.placeholder}
              id={field.id}
              name={field.name}
              required
            />
          </div>
        ))}

        <p className="form-heading">Type of Booking</p>
        <select name="type" className="custom-select" required>
          <option value="Hotel">Hotel</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
          <option value="Aeroplane">Aeroplane</option>
        </select>

        {bookingOptions.map((option, index) => (
          <div key={index}>
            <p className="form-heading">
              <br />
              {`Type of ${option.label}`}
            </p>
            <select name={option.name} className="custom-select" required>
              {option.options.map((opt, i) => (
                <option value={opt} key={i}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}

        <p className="form-heading">
          <br />
          If Hotel Enter No
        </p>
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="source"
              placeholder="Source"
              className="form-control"
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              className="form-control"
              required
            />
          </div>
        </div>

        <br />
        <button type="submit" className="btn btn-outline-success float-right">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Passengers;
