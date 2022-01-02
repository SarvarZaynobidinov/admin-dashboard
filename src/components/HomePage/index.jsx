import React from "react";
import dots from "../../assets/image/dots.png";
import User from "../../assets/image/user.png";
import Arrow from "../../assets/image/right-arrow.png";
import Money from "../../assets/image/save-money.png";
import ShCart from "../../assets/image/shopping-cart-2.png";
import dollar from "../../assets/image/dollar-bills-stack.png";
import { HomePageWrapper } from "./style";
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts'

function HomePage() {
  const series1 = [
    {
      name: "desktop",
      data: [20, 70, 50, 70, 40, 100, 150],
    },
  ];
  const series2 = [
    {
      name: "mobile",
      data: [20, 65, 80, 90, 120, 85, 150],
    }
  ];

  const option3 = {
    labels: ["desktop", "mobile", "tablet"],
    title: {
      text: "Visit Customer",
      style: {
        fotnSize: "20px",
        color: "gray",
      },
    },
    style: {
      margin: "10px 20px",
    },
    colors: ["#4049FE", "#34DEFF", "#FFBF40"],
    theme: {
      mode: "light",
    },
    dataLabels: {
      enabled: false,
    },
  };

  const option2 = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "string",
      category: ["Sun", "Mon", "Tue", 40, 50, 60, 70],
    },
    title: {
      text: "Analytics",
      style: {
        fotnSize: 30,
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };
  const option1 = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "number",
      category: [10, 20, 30, 40, 50, 60, 70],
    },
    title: {
      text: "Sales overview",
      style: {
        fotnSize: 30,
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };

  return (
    <HomePageWrapper>
      <div className="wrapper">
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src={dollar} />
            </div>
            <img src={dots} className="img2" />
          </div>

          <p className="price-card">$25,255,000</p>
          <div className="card-total">
            <p className="title-card">Today Sales</p>
            <div className="bb">
              <img src={Arrow} />
              <p>+35%</p>
            </div>
          </div>
        </div>
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src={Money} />
            </div>
            <img src={dots} className="img2" />
          </div>

          <p className="price-card">$1255,00</p>
          <div className="card-total">
            <p className="title-card">Today Expenses</p>
            <div className="bb">
              <img src={Arrow} className="src" />
              <p className="p">+10%</p>
            </div>
          </div>
        </div>
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src={User} />
            </div>
            <img src={dots} className="img2" />
          </div>

          <p className="price-card">$5355</p>
          <div className="card-total">
            <p className="title-card">Today Visitors</p>
            <div className="bb">
              <img src={Arrow} />
              <p>+15%</p>
            </div>
          </div>
        </div>
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src={ShCart} />
            </div>
            <img src={dots} className="img2" />
          </div>

          <p className="price-card">$500</p>
          <div className="card-total">
            <p className="title-card">Today Orders</p>
            <div className="bb">
              <img src={Arrow} />
              <p>+17%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="apexcharts1">
         
          <Chart
            style={{ margin: "auto",  padding:"10px 5px" }}
            options={option1}
            series={series1}
            type="bar"
            width={590}
            height="310"
          />
        </div>
        <div className="apexcharts2">
          <Chart
            style={{ margin: "10px -10px auto", backgroundColor:"white", padding:"10px 5px" }}
            options={option2}
            series={series2}
            type="area"
            width={380}
            height="270"
            title="Analtics"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="table">
          <p>Recent Product</p>
          <table>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Data</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>#642757</td>
              <td>
                <img
                  src="https://cdn.pixabay.com/photo/2020/07/15/18/29/sneakers-5408659_960_720.png"
                  alt="nike"
                />
                Nike Air Max
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="bg">Shipping</td>
            </tr>
            <tr>
              <td>#785487</td>
              <td>
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/13/12/17/headphone-159569_960_720.png"
                  alt="headphone"
                />
                Headphone
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="bg2">Pasding</td>
            </tr>
            <tr>
              <td>#391347</td>
              <td>
                <img
                  src="	https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_960_720.png"
                  alt="iphon"
                />
                Iphone Pro
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="bg3">Canseled</td>
            </tr>
          </table>

          <div className="table-footer">
            <Link to="/">See all</Link>
          </div>
        </div>
        <div className="charts">
          <Chart
            type="donut"
            width="360"
            series={[70, 20, 20]}
            options={option3}
            style={{
              margin: "30px 5px 0px 0px",
              height: "250px",
              backgroundColor: "white",
            }}
          ></Chart>
        </div>
      </div>
    </HomePageWrapper>
  );
}

export default HomePage;
