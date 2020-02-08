export function PostData(type, userdata) {
  let Baseurl = "http://api.thewallscript.com/restful/";
  return new Promise((resolve, reject) => {
    fetch(Baseurl + type, {
      method: "POST",
      body: JSON.stringify(userdata)
    })
      .then(response => response.json())
      .then(responseJson => {
        resolve(responsegitJson);
      })
      .catch(error => {
        reject(error);
      });
  });
}
