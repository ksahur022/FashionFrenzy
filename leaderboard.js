let votes = {
  1: { count: 12900, username: '@shweta_mahadik🥈' },
  2: { count: 10001, username: '@davidson_ella' },
  3: { count: 1682, username: '@rose___smith01' },
  4: { count: 10155 ,username: '@vihaanMathur🥉'},
  5: { count: 9986 ,username: '@aanyaPrateek'},
  6: { count: 1005 ,username: '@brownkid'},
  7: { count: 15236 ,username: '@theradhikamaze🥇'},
  8: { count: 6527 ,username: '@shreyaslathia'},
  9: { count: 8059,username: '@siddharthRaichan'},
  10: { count: 982,username: '@inayat004'},
  11: { count: 2650 ,username: '@shehrish-ali'},
  12: { count: 2798 ,username: '@kayanaat_mehra'}
};

function vote(pictureId) {
  votes[pictureId].count++;
  updateLeaderboard();
}

function updateLeaderboard() {
  const leaderboard = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
  leaderboard.innerHTML = '';

  const sortedVotes = Object.keys(votes).sort((a, b) => votes[b].count - votes[a].count);

  sortedVotes.forEach((id, index) => {
      const tr = document.createElement('tr');
      
      const tdIndex = document.createElement('td');
      tdIndex.textContent = index + 1;
      
      const tdUsername = document.createElement('td');
      tdUsername.textContent = votes[id].username;
      
      const tdVotes = document.createElement('td');
      tdVotes.textContent = `${votes[id].count} votes`;

      tr.appendChild(tdIndex);
      tr.appendChild(tdUsername);
      tr.appendChild(tdVotes);

      leaderboard.appendChild(tr);
  });
}

updateLeaderboard();
