import { checkTokenValidity } from "../model/dashboardModel.js";

$(document).ready(function () {
  if (checkTokenValidity()) {
    const token = localStorage.getItem("authToken");
    console.log(token);

    $(".dash-btn a").on("click", function (event) {
      event.preventDefault();
      const page = $(this).attr("href");
      $("#mainContentFrame").attr("src", page);
    });
  }
});

$(".btn-signout").click(function () {
  swal({
    title: "Are you sure?",
    text: "Do you want to signout this system!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willOut) => {
    if (willOut) {
      localStorage.removeItem("authToken");
      window.location.href = "../index.html";
    }
  });
});


const fieldCtx = document.getElementById('fieldUsageChart').getContext('2d');
const cropCtx = document.getElementById('cropProductionChart').getContext('2d');

new Chart(fieldCtx, {
    type: 'pie',
    data: {
        labels: ['Field A', 'Field B', 'Field C'],
        datasets: [{
            data: [30, 50, 20],
            backgroundColor: ['#28a745', '#ffc107', '#17a2b8']
        }]
    }
});

new Chart(cropCtx, {
    type: 'bar',
    data: {
        labels: ['Wheat', 'Rice', 'Corn'],
        datasets: [{
            label: 'Production (Tons)',
            data: [120, 80, 150],
            backgroundColor: '#67d47f'
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});

