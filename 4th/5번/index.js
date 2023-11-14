// 여기에 1번 문제의 답을 작성하세요.
const getDatas = async () => {
  try {
    const resPonse = await fetch('https://dummyjson.com/products');
    const data = await resPonse.json();
    return data;
  } catch (error) {
    console.log('에러 발생', error);
  }
};
// 여기에 2번 문제의 답을 작성하세요.
const addData = async () => {
  try {
    const resPonse = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'BMW Pencil',
        /* other product data */
      }),
    });
    const daTa = await resPonse.json();
    return daTa;
  } catch (error) {
    'error 발생했음', error;
  }
};
