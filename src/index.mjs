import "./styles.css";

const onClicAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから完了リストに移動する
    const completeTarget = completeButton.parentNode;
    completeTarget.removeChild(completeButton);
    completeTarget.removeChild(deleteButton);
    completeTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // button(戻す)タグ生成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    // 押された戻すボタンの親タグを完了リストから未完了リストに移動する。
    const backTarget = backButton.parentNode;
    backTarget.removeChild(backButton);
    backTarget.appendChild(completeButton);
    backTarget.appendChild(deleteButton);
    document.getElementById("incomplete-list").appendChild(backTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

  // alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClicAdd());
