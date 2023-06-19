const getPlayerHead = async (username) => {
    const res = await axios.get(`https://playerdb.co/api/player/minecraft/${username}`);
    const UUID =  res.data.data.player.id
    console.log(UUID)
    const img = document.querySelector("#face");
    const img2 = document.querySelector("#face2");
    const img3 = document.querySelector("#face3");
    const img4 = document.querySelector("#face4");
    document.getElementById("username").innerHTML = username;
    document.getElementById("uuid").innerHTML = UUID;
    img.src = `https://crafatar.com/avatars/${UUID}`;
    img2.src = `https://crafatar.com/renders/head/${UUID}`
    img3.src = `https://crafatar.com/renders/body/${UUID}`
    img4.src = `https://crafatar.com/skins/${UUID}`
}
const btn = document.querySelector("#click2");
btn.addEventListener("click", () => {
    getPlayerHead("GGXGang")
})