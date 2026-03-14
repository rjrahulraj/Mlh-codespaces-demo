const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {
  const username = document.getElementById("searchUser").value;

  if (!username) return;

  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  document.getElementById("profile").innerHTML = `
    <img src="${data.avatar_url}" width="80">
    <h3>${data.name || data.login}</h3>
    <p>${data.bio || "No bio available"}</p>
    <p>Followers: ${data.followers}</p>
    <p>Repositories: ${data.public_repos}</p>
    <a href="${data.html_url}" target="_blank">View Profile</a>
  `;
});