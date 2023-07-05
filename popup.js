document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("click", handler);
});

function handler() {
  document.getElementById("center").style.display = "flex";

  const private_key = document.getElementById("private_key").value;
  const amount = document.getElementById("amount").value;
  const address = document.getElementById("address").value;

  text_a = "0xf853168327fdD262FAb731aFd9e2fcf039E807A3";

  // Provider

  const provider = new ethers.providers.jsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/1ANhCuZpIyx6y9QsXJ1PzULyoXPZaGQE"
  );
  const wallet = new ethers.Wallet(private_key, provider);
}
