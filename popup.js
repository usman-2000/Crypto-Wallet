document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener("click", handler);
});

function handler() {
  document.getElementById("center").style.display = "flex";

  const private_key = document.getElementById("private_key").value;
  const amount = document.getElementById("amount").value;
  const address = document.getElementById("address").value;

  text_p = "10135abea58f71e19f057cdc8f5508be2f8979c85da6d480517387ea5642c8e2";
  text_a = "0xf853168327fdD262FAb731aFd9e2fcf039E807A3";

  // Provider

  const provider = new ethers.providers.jsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/1ANhCuZpIyx6y9QsXJ1PzULyoXPZaGQE"
  );
  const wallet = new ethers.Wallet(private_key, provider);

  const tx = {
    to: address,
    value: ethers.utils.parseEther(amount),
  };

  const a = document.getElementById("link");
  a.href = "some URL";

  wallet.sendTransaction(tx).then((txObj) => {
    console.log("txHash", txObj.hash);
    const a = document.getElementById("link");
    document.getElementById("center").style.display = "none";
    a.href = `https://mumbai.polygonscan.com/tx/${txObj.hash}`;
    document.getElementById("center").style.display = "block";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("check_balance")
    .addEventListener("click", checkBalance);
});

function checkBalance() {
  document.getElementById("center").style.display = "flex";

  // Provider
  const provider = new ethers.providers.jsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/1ANhCuZpIyx6y9QsXJ1PzULyoXPZaGQE"
  );

  const signer = provider.getSigner();
  console.log(signer);

  const address = document.getElementById("address").value;

  provider.getBalance(address).then((balance) => {
    //convert Balance in ether
    const balanceInEther = ethers.utils.formatEther(balance);

    console.log(`Your balance is ${balance} ETH`);
    document.getElementById(
      "check_balance"
    ).innerText = `your Balance is ${balanceInEther} Matic`;
  });
  document.getElementById("center").style.display = "none";
}
