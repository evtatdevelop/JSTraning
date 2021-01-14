const header = document.querySelector('.header');
const app = document.querySelector('.app');
const http = customHttp();

/**
 * AJAX reuests
 */
function customHttp() {
  return {
    get(url, callBack) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            callBack(`Error. Status: ${xhr.status}`, xhr);
            return;
          }
          response = JSON.parse(xhr.responseText);
          callBack(null, response);
        });
        xhr.addEventListener('error', () => {
          callBack(`Error. Status: ${xhr.status}`, xhr);
        });
        xhr.send();
      } catch (error) {
        callBack(error);
      }
    },
    post(url, body, headers, callBack) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);

        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            callBack(`Error. Status: ${xhr.status}`, xhr);
            return;
          }
          response = JSON.parse(xhr.responseText);
          callBack(null, response);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.addEventListener('error', () => {
          callBack(`Error. Status: ${xhr.status}`, xhr);
        });

        xhr.send(JSON.stringify(body));
      } catch (error) {
        callBack(error);
      }
    },
  };
}

document.addEventListener('DOMContentLoaded', function () {
  loadNews();
});

const newsService = (function () {
  const apiKey = '6fef207451e3427694d2d8a5947e1f63';
  const apiUrl = 'https://newsapi.org/v2';
  return {
    topHeadlines(country = 'us', cb) {
      const url = `${apiUrl}/top-headlines?country=${country}&apiKey=${apiKey}`;
      console.log(url);
      http.get(url, cb);
    },
    everything(search, cb) {
      const url = `${apiUrl}/everything?q=${search}&apiKey=${apiKey}`;
      http.get(url, cb);
    },
  };
})();

function loadNews() {
  newsService.topHeadlines('us', onGetResponse);
}

function onGetResponse(err, response) {
  console.log(response);
}
