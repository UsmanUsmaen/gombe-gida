const criteria = [
  ['Strategic Alignment', '20%'],
  ['Long-Term Value', '15%'],
  ['Financial Value', '10%'],
  ['Institutional Value', '10%'],
  ['Learning Value', '10%'],
  ['Network Value', '10%'],
  ['Reputation Value', '5%'],
  ['Probability of Success', '10%'],
  ['Quality of Life', '5%'],
  ['Risk Protection', '5%'],
];

const criteriaContainer = document.querySelector('#criteria');

criteria.forEach(([name, weight]) => {
  const item = document.createElement('div');
  item.className = 'criterion';
  item.innerHTML = `<span>${name}</span><span>${weight}</span>`;
  criteriaContainer.appendChild(item);
});
