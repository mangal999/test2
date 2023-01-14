function init() {
            window.onload = () => {
                const currentDate = new Date();
                const currentTimestampEl = document.getElementById('current_timestamp');
                const timestampEl = document.getElementById('timestamp');
                const dateTimeEl = document.getElementById('date-time');
                const isoEl = document.getElementById('iso-time');
                const rfcEl = document.getElementById('rfc-time');



                const currTimeStamp = currentDate.getTime();
                const dateTime = currentDate.toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata', year: 'numeric', month: 'long', day: 'numeric' })
                console.log('currentTimestampEl', currentTimestampEl)
                currentTimestampEl.innerText = currTimeStamp;
                timestampEl.innerText = currTimeStamp;
                dateTimeEl.innerText = dateTime;
                isoEl.innerText = currentDate.toISOString();
                rfcEl.innerText = currentDate.toUTCString();
            }
        }
        init()
   