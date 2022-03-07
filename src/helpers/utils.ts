export const handleResponse = async (
  response: Response,
  responseType: 'JSON' = 'JSON',
): Promise<any> => {
  //successfully get a response
  if (response.status === 200) {
    if (responseType === 'JSON') {
      let json: JSON = await response.json();
      return json;
    } else {
      return {
        api: 'Wrong Response Type',
      };
    }
  } else {
    return {
      api: response.status + ' ' + response.statusText,
    };
  }
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

export const timeFormatter = (time: number) => {
  let hrs = Math.floor(time / 3600);
  let mins = Math.floor((time % 3600) / 60);
  let secs = Math.floor(time % 60);
  // let negative = '';
  if (time >= 0) {
    if (hrs < 10) {
      hrs;
    }
    if (mins < 10) {
      ('');
    }
    if (secs < 10) {
      secs;
    }
    return `${hrs > 0 ? hrs : ''} ${mins > 0 ? mins + 'm' : ''}${
      secs > 0 ? secs + 's' : ''
    }`;
  } else {
    let negative = '-' + Math.abs(time) + 's';
    return negative;
  }
};

export const unixTimeConverter = (time: number): number => {
  const currentTime = Math.round(new Date().getTime() / 1000);

  return time - currentTime;
};
