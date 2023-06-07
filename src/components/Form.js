import { useState } from "react";
const Form = (props) => {
  const { uyeler, setUyeler, editId } = props;
  const bosData = {
    firstName: "",
    lastName: "",
    email: "",
    position: "",
  };
  const [uye, setUye] = useState(
    editId ? uyeler.find((item) => item.id == editId) : bosData
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUye({ ...uye, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const eskiUye = uyeler.find((item) => item.id == editId);
      eskiUye.firstName = uye.firstName;
      eskiUye.lastName = uye.lastName;
      eskiUye.email = uye.email;
      eskiUye.position = uye.position;
      setUyeler([...uyeler]);
    } else {
      const yeniUye = { ...uye, id: uyeler.length };
      setUyeler([...uyeler, uye]);
    }

    setUye(bosData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="firstName"
            placeholder="isim giriniz"
            onChange={handleChange}
            value={uye.fırstName}
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            name="lastName"
            placeholder="soyadınızı giriniz"
            onChange={handleChange}
            value={uye.lastName}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Email giriniz."
            onChange={handleChange}
            value={uye.email}
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            name="position"
            placeholder="Position giriniz."
            onChange={handleChange}
            value={uye.position}
          />
        </label>

        <button type="submit" value="submit">
          Gönder
        </button>
      </div>
    </form>
  );
};
export default Form;
