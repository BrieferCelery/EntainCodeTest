export const handleResponse = async (
  response: any,
  responseType:
    | 'HTML'
    | 'JSON'
    | 'TEXT'
    | 'BUFFER'
    | 'IMAGE'
    | 'EMPTY' = 'JSON',
): Promise<any> => {
  //successfully get a response
  if (response.status === 200) {
    if (responseType === 'IMAGE') {
      //   return response.blob().then((blob: Blob): string => {
      //     let objUrl = URL.createObjectURL(blob);
      //     return objUrl;
      //   });
      //   let blob = await response.blob();
      //   let objUrl = URL.createObjectURL(blob);
      return response;
    } else if (responseType === 'JSON') {
      //   return response.json().then((json: JSON) => {
      //     return json;
      //   });
      let json: JSON = await response.json();
      return json;
    } else if (responseType === 'TEXT') {
      let body = response.body;
      return body;
    } else if (responseType === 'HTML') {
      let text = await response.text();
      return text;
    } else if (responseType === 'EMPTY') {
      return;
    } else {
      return {
        api: 'Wrong Response Type',
      };
    }
  }
  //unauthorised request detected by the api
  else if (response.status === 401) {
    //auto logout
    //TODO: logout user
  }
  //content not found
  else if (response.status === 400 || response.status === 404) {
    // return response.json().then((json) => {
    //   return Promise.reject(json.errors);
    // });
    let json = await response.json();
    return Promise.reject(json.errors);
  }
  //all others responses
  else
    return {
      api: response.status + ' ' + response.statusText,
    };
};

export const getInit = () => {
  let options: any = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
    },
  };

  return options;
};

export const unixTimeConverter = (time: number): number => {
  const currentTime = Math.round(new Date().getTime() / 1000);
  return time - currentTime;
};
