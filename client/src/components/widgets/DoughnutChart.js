import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';

const DoughnutChart = ({ myApplications }) => {
  console.log(myApplications);
  let labels = {
    labels: ['Rejected', 'Offers', 'Applied', 'Interviews'],
    datasets: [
      {
        data: [300, 50, 100, 3],
        backgroundColor: ['#FF6384', '#4E937A', '#3ABEFF', '#E8E288'],
        hoverBackgroundColor: ['#FF6384', '#4E937A', '#3ABEFF', '#E8E288']
      }
    ]
  };
  return (
    <div>
      <Doughnut
        data={labels}
        options={{
          animationEasing: 'easeInSine',
          showTooltips: true,
          height: '100px'
        }}
        height={25}
        width={100}
      />
    </div>
  );
};

export default DoughnutChart;
