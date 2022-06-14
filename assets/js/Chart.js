var ctx = document.getElementById('chart').getContext('2d');
var ctx1 = document.getElementById('chart1').getContext('2d');

// var chart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//       datasets: [{
//           label: '# of Votes',
//           data: [120, 190, 30, 50, 20, 30]
//       }]
//   }
// });
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ["國小", "國中", "高中", "高職", "專科", "大學", "研究所"],
      labelColor:'#fff',
      datasets: [{
          label: '# boy',
          data: [718503, 1043513, 563658, 1843304, 1023139, 2082331, 734313],
          backgroundColor: [
              '#AED6F1 ',
              '#AED6F1 ',
              '#AED6F1 ',
              '#AED6F1 ',
              '#AED6F1 ',
              '#AED6F1 ',
              '#AED6F1 ',
          ],
          borderColor: [
              '#3498DB ',
              '#3498DB ',
              '#3498DB ',
              '#3498DB ',
              '#3498DB ',
              '#3498DB ',
              '#3498DB ',
          ],
          borderWidth: 1,
      }]
      
  }
  
});
var chart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
      labels: ["國小", "國中", "高中", "高職", "專科", "大學", "研究所"],
      datasets: [{
          label: '# girl',
          data: [1194422, 1049578, 566136, 1773414, 1014975, 2317332, 469451],
          backgroundColor: [
              '#FADBD8',
              '#FADBD8',
              '#FADBD8',
              '#FADBD8',
              '#FADBD8',
              '#FADBD8',
              '#FADBD8',
          ],
          borderColor: [
              '#F1948A',
              '#F1948A',
              '#F1948A',
              '#F1948A',
              '#F1948A',
              '#F1948A',
              '#F1948A',
          ],
          borderWidth: 1
      }]
      
  }
  
});