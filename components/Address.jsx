import styles from "../styles/Address.module.css";
import Input from "./Input";
import { Component } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import classNames from "classnames";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    const { country, region } = this.state;
    return (
      <div className={styles.address}>
        <Input
          type="name"
          id="name"
          htmlFor="name"
          className={styles.address__name}
        >
          NAME
        </Input>
        <div className={styles.address__country}>
          <CountryDropdown
            //   value={this.getCountryValue(10)}
            defaultOptionLabel="SELECT COUNTRY"
            value={country}
            onChange={(val) => this.selectCountry(val)}
            className={styles.country}
          />
        </div>
        <div className={styles.step_input1}>
          <Input
            type="street"
            id="street"
            htmlFor="street"
            className={styles.address__street}
          >
            STREET ADDRESS
          </Input>
          <Input
            type="apt"
            id="apt"
            htmlFor="apt"
            className={styles.address__apt}
          >
            APT. SUIT
          </Input>
        </div>
        <div className={styles.step_input2}>
          <Input type="city" id="city" htmlFor="city" className={styles.address__city}>
            CITY
          </Input>
          <div className={classNames(styles.address__country,styles.address__region)}>
            <RegionDropdown
              blankOptionLabel="SELECT REGION"
              defaultOptionLabel="SELECT REGION"
              country={country}
              value={region}
              onChange={(val) => this.selectRegion(val)}
              className={styles.country}
            />
          </div>
          <Input type="postal" id="postal" htmlFor="postal" className={styles.address__postal}>
            POSTAL/ZIP
          </Input>
        </div>
      </div>
    );
  }
}

export default Address;
