<script>
  click_to_convert.addEventListener('click',async function() {
  // new speech recognition object
  var speech = true;
  window.SpeechRecognition = window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  // Set the properties for the Speech Recognition object
  recognition.interimResults = true;
  //language
  recognition.lang="ar";
  recognition.lang = document.getElementById("la").value;

  // This runs when the speech recognition service returns result
  recognition.addEventListener('result', e=>{
    const transcript = Array.from(e.results)
    .map(result =>result[0])
    .map(result =>result.transcript)
    convert_text.innerHTML = transcript;
  })
  // start recognition
  if(speech == true){
    recognition.start();
    const port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });
  }
})
async function connectSerial(){
  try {
    const textEncoder = new TextEncoderStream();

    const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);

    const writer = textEncoder.writable.getWriter();

  } catch (e) {
    alert('Serial port not found')

  }
}
async function commandAnalayzer(script) {

        console.log(script);

        if (script.includes("يمين") || script.includes("right")) {

            await writer.write("right");

        }

        else if (script.includes("يسار") || script.includes("left")) {

            await writer.write("left");
        }

        writer.releaseLock();
    }
</script>
