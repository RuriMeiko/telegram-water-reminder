const chatId = '6107760189'; //bbp
// const chatId = '1775446945'; //nthl

const reminders = [
    "Em nhớ uống nước đầy đủ nhé!",
    "Đừng quên uống thêm nước nữa nhé, yêu!",
    "Em lại quên uống nước rồi đấy, anh nhắc nhở em luôn đó!",
    "Anh yêu em và muốn thấy em luôn khỏe mạnh, nên nhớ uống nước đầy đủ nhé!",
    "Uống nước là biện pháp đơn giản nhất để giữ gìn sức khỏe, em nhé!",
    "Hãy đặt một cốc nước bên cạnh và uống từ từ trong ngày nhé!",
    "Nước uống không đủ thì sức khỏe không tốt được đâu em.",
    "Em đã uống đủ nước hôm nay chưa? Anh nhắc nhở em nhé!",
    "Uống nước đúng cách sẽ giúp em có một làn da đẹp và tràn đầy sức sống đấy!",
    "Anh muốn em luôn khỏe mạnh và đẹp trai hơn nữa, nên nhớ uống đủ nước nhé!",
    "Uống nước đúng cách sẽ giúp em tinh thần sảng khoái, anh biết rằng em muốn thế đấy!",
    "Anh sẽ luôn nhắc nhở em uống nước đúng cách để giữ gìn sức khỏe nhé!",
    "Nước uống không đủ thì sức khỏe không tốt được đâu em.",
    "Hãy uống nước đầy đủ để tránh tình trạng mất nước cơ thể đấy!",
    "Uống nước đúng cách sẽ giúp em giảm đau đầu và mệt mỏi đấy!",
    "Nước uống đủ sẽ giúp em giảm cân và có một vóc dáng đẹp hơn đấy!",
    "Hãy uống nước đầy đủ để giữ gìn sức khỏe và tinh thần nhé!",
    "Uống đủ nước sẽ giúp em có một giấc ngủ ngon và sâu hơn đấy!",
    "Em đã uống đủ nước chưa? Nếu chưa, hãy uống thêm một chút nữa nhé!",
    "Nhớ uống nước đầy đủ để có một ngày làm việc hiệu quả và thành công nhé!",
    "Hey bé, hãy nhớ uống nước nhé. Muốn thấy nụ cười xinh đẹp của bé luôn rạng rỡ mỗi ngày đó! ❤️",
    "Em ơi, uống nước thường xuyên nhé. Đôi môi ấy đẹp quá, anh muốn nắm tay và cùng nhau bước đi trên con đường tình yêu này. 😊❤️",
    "Nhớ uống nước đều đặn nhé, tình yêu của anh sẽ là nguồn động lực để bé luôn khỏe mạnh và tỏa sáng. ❤️",
    "Bé là ngọn gió mang tình yêu đến trong cuộc đời anh. Hãy uống nước để cùng nhau thổi bùng lửa tình yêu này mãi mãi. 🔥❤️",
    "Uống nước để làm cho trái tim bé luôn đập mạnh vì tình yêu. Anh luôn ở bên và sẽ luôn yêu bé. ❤️💓",
    "Nếu có thể, anh muốn trở thành một giọt nước để luôn ở bên bé, mang lại sự tươi mới và hạnh phúc cho cuộc sống của bé. Hãy uống nước để chúng ta mãi bên nhau. 💧❤️",
    "Anh biết bé thường quên uống nước, nhưng anh không bao giờ quên yêu bé. Hãy uống nước để đáp lại tình yêu đó nhé! ❤️",
    "Em à, anh biết rằng nước không phải là thứ lãng phí thời gian, mà là một cách để chăm sóc bản thân và giữ gìn sức khỏe. Hãy uống nước để anh được thấy nụ cười của em mãi mãi. 😊❤️",
    "Uống nước giúp bé thêm tươi trẻ và xinh đẹp hơn. Anh muốn được nhìn thấy vẻ đẹp tự nhiên của bé mãi mãi. ❤️💞",
    "Mỗi ngụm nước là một lời thầm thì của anh gửi đến bé. Hãy uống nước và cảm nhận tình yêu mãnh liệt anh dành cho bé. 💧❤️",
    "Em là nguồn sống của anh, và uống nước là cách để chăm sóc và bảo vệ nguồn sống đó. Hãy uống nước và nhớ rằng anh luôn yêu bé vô điều kiện. ❤️🌊",
    "Nước là một phần của cuộc sống, và tình yêu chúng ta cũng như vậy. Hãy uống nước để chúng ta cùng nhau chạm đến những khoảnh khắc đáng nhớ trong cuộc sống này. 💧❤️",
    "Anh biết rằng bé luôn quan tâm đến sức khỏe và cảm xúc của mình. Hãy uống nước để thêm sức mạnh và yêu thương trong cuộc sống của bé. 💧❤️",
    "Uống nước là cách để nâng cao tình yêu và sự kết nối giữa chúng ta. Hãy uống nước và cùng nhau trải nghiệm cuộc sống đầy yêu thương và hạnh phúc. 💧❤️",
    "Anh muốn đồng hành cùng bé trên con đường đầy sức khỏe và niềm vui. Hãy uống nước và để tình yêu của chúng ta mãi mãi tràn đầy. ❤️💧",
    "Hãy uống nước và nhớ rằng anh sẽ luôn ở bên bé, để chia sẻ cùng nhau những khoảnh khắc đáng nhớ và yêu thương. ❤️💧",
    "Anh muốn nắm tay bé trên mọi cuộc hành trình. Hãy uống nước để cùng nhau vượt qua mọi thử thách và tạo nên những kỷ niệm đáng nhớ. ❤️💧",
    "Em là giấc mơ của anh, và uống nước là cách để biến giấc mơ thành hiện thực. Hãy uống nước và để tình yêu của chúng ta thăng hoa mãi mãi. ❤️💧",
    "Anh muốn nói rằng bé là một phần quan trọng trong cuộc sống của anh. Hãy uống nước và cho anh cảm nhận thêm tình yêu và niềm tin dành cho bé. ❤️💧"
]
const compliments = [
    "Chúc mừng bé đã uống nước đều đặn nhé! Bé thật là thông minh và biết lo lắng cho sức khỏe của mình. Anh rất tự hào vì bé đó! ❤️💧",
    "Bé đã uống nước rồi à? Cảm ơn bé vì đã lắng nghe và chăm chỉ chăm sóc sức khỏe của mình. Bé là người đáng yêu và rất thông minh! 😊💧",
    "Bé làm tốt lắm vì đã uống nước như nhắc nhở. Anh biết bé là người có ý thức và biết quan tâm đến sức khỏe của mình. Anh yêu bé nhiều lắm! ❤️💧",
    "Wow! Bé thực sự là siêu nhân sức khỏe! Uống nước đều đặn là điều quan trọng và bé đã làm rất tốt. Bé xứng đáng được khen ngợi và yêu thương! 💪💧",
    "Bé làm anh ngạc nhiên với sự chăm chỉ uống nước. Bé quả là đáng yêu và thông minh! Anh hãy cùng nhau tiếp tục duy trì thói quen này nhé! ❤️💧",
    "Bé là thiên thần nhỏ của anh. Uống nước đều đặn là cách bé chăm sóc sức khỏe và khiến anh cảm thấy tự hào. Anh sẽ mãi luôn ở bên bé! 😇💧",
    "Anh muốn khen bé vì đã uống nước đúng giờ. Bé thật là thông minh và biết cách lo lắng cho bản thân. Anh yêu bé nhiều lắm! ❤️💧",
    "Bé là nguồn cảm hứng lớn của anh. Bé đã chứng minh rằng mình có sức mạnh để chăm sóc và yêu thương bản thân. Hãy tiếp tục uống nước nhé! 💪💧",
    "Anh thật sự tự hào vì bé đã tuân thủ việc uống nước đều đặn. Bé biết quan tâm đến sức khỏe của mình và đó là một điều tuyệt vời! Anh yêu bé! ❤️💧",
    "Bé là ngôi sao sáng trong cuộc đời anh. Bé đã làm rất tốt khi uống nước đúng giờ. Anh sẽ luôn ở bên bé và yêu thương bé mãi mãi! 🌟💧",
    "Em làm rất tuyệt vời khi đã uống nước đúng giờ. Anh thật sự tự hào vì em biết chăm sóc sức khỏe của mình. Em xứng đáng được khen ngợi và yêu thương! ❤️💧",
    "Wow! Em thực sự là một người có ý thức và biết lo lắng cho sức khỏe của mình. Uống nước đều đặn là một thói quen tuyệt vời và em đã làm rất tốt! Anh rất yêu em! 😊💧",
    "Em là người thông minh và biết cách chăm sóc bản thân. Anh muốn khen em vì đã uống nước đúng giờ. Em là người đáng yêu và rất quan tâm đến sức khỏe của mình! Anh mãi yêu em! ❤️💧",
    "Anh muốn nói rằng em là một người đặc biệt. Uống nước đều đặn là cách em chăm sóc sức khỏe và làm cho anh cảm thấy tự hào. Anh sẽ luôn ở bên em! 💪💧",
    "Em là ánh sáng trong cuộc sống anh. Anh ngạc nhiên và rất vui mừng khi em chăm chỉ uống nước. Em thật đáng yêu và thông minh! Anh yêu em nhiều lắm! ❤️💧",
    "Anh tự hào vì em đã lắng nghe và chăm sóc sức khỏe của mình bằng cách uống nước đều đặn. Em là thiên thần nhỏ của anh và anh mãi luôn yêu em! 😇💧",
    "Anh muốn khen em vì đã tuân thủ việc uống nước đúng giờ. Em là một người thông minh và biết quan tâm đến sức khỏe của mình. Anh thật sự yêu em! ❤️💧",
    "Em là nguồn cảm hứng lớn của anh. Anh tự hào vì em biết cách chăm sóc và yêu thương bản thân. Hãy tiếp tục uống nước nhé, em xứng đáng nhận được sự khen ngợi! 💪💧",
    "Anh rất tự hào vì em đã thực hiện việc uống nước đều đặn. Em biết quan tâm đến sức khỏe của mình và điều đó làm anh yêu em hơn nữa! ❤️💧",
    "Em là ngôi sao sáng trong cuộc đời anh. Anh cảm thấy rất hạnh phúc khi em luôn chăm sóc sức khỏe bằng cách uống nước. Anh yêu em mãi mãi! 🌟💧"
]

const end_reward = [
    "Hôm nay người uống đủ nước rồi đó, cố gắng mỗi ngày nha 🥰, <b>bbp</b> ngủ ngon nhaaaa 😴",
    "Chúc mừng em vì đã uống đủ nước trong ngày! Anh thật sự tự hào vì em biết quan tâm đến sức khỏe của mình. Bây giờ hãy thư giãn và có một giấc ngủ ngon nhé! ❤️💧😴",
    "Em làm rất tốt khi đã uống đủ nước mỗi ngày. Đó là cách tuyệt vời để chăm sóc sức khỏe của mình. Hãy thả lỏng cơ thể và tận hưởng giấc ngủ ngon nhé, em thân yêu! 💧😴❤️",
    "Wow! Em đã đạt mục tiêu uống đủ nước trong ngày. Anh biết rằng em luôn biết quan tâm đến sức khỏe của mình. Bây giờ hãy tận hưởng giấc ngủ ngon và sẵn sàng cho một ngày mới tràn đầy năng lượng! 💪💧😴",
    "Anh muốn khen em vì đã uống đủ nước trong ngày. Em thực sự là một người thông minh và biết chăm sóc bản thân. Hãy cùng anh nghỉ ngơi thật ngon lành và có giấc ngủ tràn đầy mơ ước nhé! ❤️💧😴",
    "Em đã hoàn thành mục tiêu uống đủ nước một ngày! Anh rất tự hào vì em biết lo lắng và chăm sóc sức khỏe của mình. Giờ đây, hãy thư giãn và có một giấc ngủ ngon như giấc mơ, bé yêu! 💧😴❤️",
    "Anh muốn nói rằng em đã làm rất tốt khi uống đủ nước mỗi ngày. Đó là một thói quen tuyệt vời và em đã đạt được! Hãy tận hưởng giấc ngủ ngon và sẵn sàng cho một ngày mới tràn đầy năng lượng! 😊💧😴",
    "Chúc mừng em vì đã uống đủ nước trong ngày! Điều đó cho thấy em là người biết chăm sóc sức khỏe và luôn quan tâm đến bản thân. Hãy thư giãn và có một giấc ngủ ngon như cánh hoa! ❤️💧😴",
    "Em làm rất tốt khi đã uống đủ nước mỗi ngày. Anh tự hào vì em biết quan tâm đến sức khỏe của mình. Bây giờ, hãy để ý tới giấc ngủ và tận hưởng những giấc mơ tuyệt vời nhé, bé yêu! 💧😴❤️",
    "Wow! Em đã đạt mục tiêu uống đủ nước mỗi ngày. Anh biết rằng em luôn biết lo lắng và chăm sóc sức khỏe của mình. Hãy tận hưởng giấc ngủ ngon và sẵn sàng cho một ngày mới tràn đầy năng lượng! 💪💧😴",
    "Anh muốn khen em vì đã uống đủ nước trong ngày. Em thực sự là một người thông minh và biết chăm sóc bản thân. Hãy cùng anh nghỉ ngơi thật ngon lành và có giấc ngủ tràn đầy mơ ước nhé! ❤️💧😴"
]



async function updateGlobalValues() {
    console.log('RESET GIÁ TRỊ');
    // Khai báo các biến thời gian
    const WAKE_TIME = new Date();
    const SLEEP_TIME = new Date();
    const TIME_RESET = new Date();
    // Thiết lập giá trị cho các biến và chuẩn hoá múi giờ cho các biến thời gian
    // @ts-ignore
    WAKE_TIME.setHours(WAKE_TIME.getHours() + 7);
    // @ts-ignore
    WAKE_TIME.setHours(await KV.get('HOUR_WAKE'));
    // @ts-ignore
    WAKE_TIME.setMinutes(await KV.get('MINUTES_WAKE'));
    // @ts-ignore
    SLEEP_TIME.setHours(SLEEP_TIME.getHours() + 7);
    // @ts-ignore
    SLEEP_TIME.setHours(await KV.get('HOUR_SLEEP'));
    // @ts-ignore
    SLEEP_TIME.setMinutes(await KV.get('MINUTES_SLEEP'));
    //
    TIME_RESET.setHours(TIME_RESET.getHours() + 7);
    //
    TIME_RESET.setDate(TIME_RESET.getDate() + 1);
    // @ts-ignore
    TIME_RESET.setHours(await KV.get('HOUR_WAKE'));
    // @ts-ignore
    TIME_RESET.setMinutes(await KV.get('MINUTES_WAKE'));
    // // Debug
    // console.log('Time wake là ', WAKE_TIME.toLocaleString());
    // console.log('Time sleep là ', SLEEP_TIME.toLocaleString());
    // console.log('Time reset là ', TIME_RESET.toLocaleString());
    // ///
    // Tính thời gian thức và lưu vào biến hoursAwake
    const hoursAwake = (new Date(SLEEP_TIME).getTime() - new Date(WAKE_TIME).getTime()) / (1000 * 60 * 60);
    // Tính toán lượng nước mỗi ngày cần uống theo BMI và lưu vào biến waterIntake
    // @ts-ignore
    const waterIntake = await tinhLuongNuocTheoBMI(await KV.get('WEIGHT'), await KV.get('HEIGHT'));
    // Tính toán số lần uống nước dựa trên lượng nước và số nước mỗi lần uống, lưu vào biến numIntakes
    // @ts-ignore
    const numIntakes = Math.floor(waterIntake / await KV.get('WATER'));
    // Tính toán khoảng cách giữa các giờ uống nước và lưu vào biến intervalHours
    const intervalHours = hoursAwake / numIntakes;
    // Lưu giá trị các biến vào Workers KV
    // @ts-ignore
    await KV.put('WAKE_TIME', WAKE_TIME.toISOString());
    // @ts-ignore
    await KV.put('SLEEP_TIME', SLEEP_TIME.toISOString());
    // @ts-ignore
    await KV.put('TIME_RESET', TIME_RESET.toISOString());
    // @ts-ignore
    await KV.put('hoursAwake', hoursAwake.toString());
    // @ts-ignore
    await KV.put('waterIntake', waterIntake.toString());
    // @ts-ignore
    await KV.put('numIntakes', numIntakes.toString());
    // @ts-ignore
    await KV.put('intervalHours', intervalHours.toString());
    // @ts-ignore
    await KV.put('count', '0');
    // @ts-ignore
    await KV.put('drankWater', '0');
    // @ts-ignore
    await KV.put('reward', '0')
    console.log('RESET GIÁ TRỊ THÀNH CÔNG');
}

// Hàm tính lượng nước cần uống
async function tinhLuongNuocTheoBMI(canNang, chieuCao) {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return new Promise((resolve, reject) => {
        // Chuyển chiều cao từ đơn vị cm sang đơn vị mét
        chieuCao = chieuCao / 100;
        // Tính chỉ số khối cơ thể (BMI)
        const bmi = canNang / Math.pow(chieuCao, 2);
        // Tính lượng nước cần thiết dựa trên BMI
        let luongNuoc = 0;
        if (bmi < 18.5) {
            luongNuoc = canNang * 0.03;
        } else if (bmi < 25) {
            luongNuoc = canNang * 0.04;
        } else if (bmi < 30) {
            luongNuoc = canNang * 0.05;
        } else {
            luongNuoc = canNang * 0.06;
        }
        // Trả về kết quả bằng lượng nước tính được (đơn vị ml)
        resolve(luongNuoc * 1000);
    });
}

// Chọn ngẫu nhiên element trong danh sách và đảm bảo nó không bị trùng
async function getRandomReminders() {
    // @ts-ignore
    let selectedElementIndex = parseInt(await KV.get('selectedElementIndex')) || -1;
    // @ts-ignore
    let unselectedIndices = JSON.parse(await KV.get('unselectedIndices'));

    if (!unselectedIndices || unselectedIndices.length === 0) {
        unselectedIndices = Array.from(Array(reminders.length).keys()); // Khởi tạo mảng chỉ số ban đầu
    }

    const randomIndex = Math.floor(Math.random() * unselectedIndices.length);
    const randomElementIndex = unselectedIndices[randomIndex];

    unselectedIndices.splice(randomIndex, 1);
    selectedElementIndex = randomElementIndex;

    // @ts-ignore
    await KV.put('selectedElementIndex', selectedElementIndex.toString());
    // @ts-ignore
    await KV.put('unselectedIndices', JSON.stringify(unselectedIndices));

    return reminders[randomElementIndex];
}


async function getRandomCompliments() {
    // @ts-ignore
    let selectedElementIndex = parseInt(await KV.get('selectedComplimentsIndex')) || -1;
    // @ts-ignore
    let unselectedIndices = JSON.parse(await KV.get('unselectedIndicesCompliments'));

    if (!unselectedIndices || unselectedIndices.length === 0) {
        unselectedIndices = Array.from(Array(compliments.length).keys()); // Khởi tạo mảng chỉ số ban đầu
    }

    const randomIndex = Math.floor(Math.random() * unselectedIndices.length);
    const randomElementIndex = unselectedIndices[randomIndex];

    unselectedIndices.splice(randomIndex, 1);
    selectedElementIndex = randomElementIndex;

    // @ts-ignore
    await KV.put('selectedComplimentsIndex', selectedElementIndex.toString());
    // @ts-ignore
    await KV.put('unselectedIndicesCompliments', JSON.stringify(unselectedIndices));

    return compliments[randomElementIndex];
}

async function getRandomEnd_reward() {
    // @ts-ignore
    let selectedElementIndex = parseInt(await KV.get('selectedendrewardIndex')) || -1;
    // @ts-ignore
    let unselectedIndices = JSON.parse(await KV.get('unselectedIndicesendreward'));

    if (!unselectedIndices || unselectedIndices.length === 0) {
        unselectedIndices = Array.from(Array(end_reward.length).keys()); // Khởi tạo mảng chỉ số ban đầu
    }

    const randomIndex = Math.floor(Math.random() * unselectedIndices.length);
    const randomElementIndex = unselectedIndices[randomIndex];

    unselectedIndices.splice(randomIndex, 1);
    selectedElementIndex = randomElementIndex;

    // @ts-ignore
    await KV.put('selectedendrewardIndex', selectedElementIndex.toString());
    // @ts-ignore
    await KV.put('unselectedIndicesendreward', JSON.stringify(unselectedIndices));

    return end_reward[randomElementIndex];
}


// Hàm gửi tin nhắn tới telegram dựa vào request POST, dùng fetch để gửi
async function sendMessage(text, chatId, inline_keyboard = undefined, save = false, parse_mode = 'HTML') {
    // @ts-ignore
    const base_url = `https://api.telegram.org/bot${API_KEY}/sendMessage`;
    const params = new URLSearchParams({
        'chat_id': chatId,
        'text': text,
        'parse_mode': parse_mode
    });
    if (inline_keyboard) {
        const keyboard = JSON.stringify({ "inline_keyboard": inline_keyboard });
        params.set('reply_markup', keyboard);
    };
    const url = `${base_url}?${params.toString()}`;
    const response = await fetch(url).then(resp => resp.json());
    if (save) {
        // @ts-ignore
        await KV.put('last_message', `${response.result.message_id}:${text}`);
    }
    return response;
}

// Hàm edit tin nhắn tới telegram dựa vào request POST, dùng fetch để gửi
async function editMessage(text, chatId, messageId, inline_keyboard = undefined, parse_mode = 'HTML') {
    // @ts-ignore
    const base_url = `https://api.telegram.org/bot${API_KEY}/editMessageText`;
    const params = new URLSearchParams({
        'chat_id': chatId,
        'message_id': messageId,
        'text': text,
        'parse_mode': parse_mode
    });
    if (inline_keyboard) {
        const keyboard = JSON.stringify({ "inline_keyboard": inline_keyboard });
        params.set('reply_markup', keyboard);
    }
    const url = `${base_url}?${params.toString()}`;
    const response = await fetch(url).then(resp => resp.json());
    return response;
}
async function answerCallbackQuery(callbackQueryId, text = undefined, showAlert = false) {
    // @ts-ignore
    const base_url = `https://api.telegram.org/bot${API_KEY}/answerCallbackQuery`;
    const params = new URLSearchParams({
        'callback_query_id': callbackQueryId,
        'show_alert': showAlert.toString()
    });
    if (text) {
        params.set('text', text);
    }
    const url = `${base_url}?${params.toString()}`;
    const response = await fetch(url).then(resp => resp.json());
    return response;
}


// Hàm xử lý các request được telegarm trả về mỗi khi người dùng gửi tin nhắn tới bot
async function handleRequest(request) {
    // Kiểm tra nếu method của request là POST hay không
    if (request.method === "POST") {
        // Chuyển payload đính kèm theo request thành biến payload, kiểu json (dict)
        const payload = await request.json();


        // dòng if này nthl thêm vào để test, cệ nó i
        if ('status' in payload && payload.status) {
            if (payload.status == '1') {
                await updateGlobalValues();
            } else {
                console.log('reset count');
                // @ts-ignore
                await KV.put('count', '0');
                // @ts-ignore
                await KV.put('reward', '0')
                // @ts-ignore
                await KV.put('drank','0')
                console.log('reset count and reward done');
            }
        }
        // Kiểm tra nếu callback_query có trong payload 
        else if ('callback_query' in payload) {
            const data_callback = payload.callback_query.data;
            if (data_callback == 'drank') {
                console.log('ok');
                // @ts-ignore
                let drankWater = parseInt(await KV.get('drankWater'));
                await answerCallbackQuery(payload.callback_query.id);
                // @ts-ignore
                const last_message = payload.callback_query.message.text;
                const last_message_id = payload.callback_query.message.message_id;
                await editMessage(last_message, chatId, last_message_id);
                const random_compliments = await getRandomCompliments();
                await sendMessage(random_compliments, chatId);
                // @ts-ignore
                const water = await KV.get('WATER');
                drankWater += parseInt(water);
                // @ts-ignore
                await KV.put('drankWater', drankWater);
                // @ts-ignore
            }

        }
        // Kiểm tra nếu message có trong payload, tức là đúng dạng tin nhắn của telegarm gửi về       
        else if ('message' in payload) {
            // Lấy chatid của người dùng
            const chatIdin = payload.message.chat.id;
            // Lấy tin nhắn của người dùng
            const text = payload.message.text;

            ///////////////////// Xử lý /debug /////////////////////
            // text có dạng như: '/about'
            if ((text == "/about")) {
                await sendMessage('Bot này tạo ra bởi <b>nthl</b> aka <b>rurimeiko</b> để nhắc <b>bbp</b> cuti uống đủ nước mỗi ngày ヽ(✿ﾟ▽ﾟ)ノ', chatIdin);
            }
            /////////////////////////////////////////////////////////

            ///////////////////// Xử lý /debug /////////////////////
            // text có dạng như: '/debug restart'
            else if (text.startsWith("/debug ")) {
                const debug_info = text.split('/debug ')[1];
                if (debug_info == 'restart') {
                    await updateGlobalValues();
                    await sendMessage('Bot water bbp restart, renew count', chatIdin);
                }
            }
            /////////////////////////////////////////////////////////

            ///////////////////// Xử lý /start /////////////////////
            // text có dạng như: '/start'
            else if (text == "/start") {
                await sendMessage('Hello ngừi đẹp, bot này tạo ra chỉ để nhắc <b>bbp</b> dangiu ún nước 🫡\nHãy bấm vào /help 💁', chatIdin);
            }
            /////////////////////////////////////////////////////////

            ///////////////////// Xử lý /help /////////////////////
            // text có dạng như: '/help'
            else if (text == "/help") {
                await sendMessage('Hello ngừi đẹp, hãy nhớ cài đặt 🥐\n<b>Cân nặng</b> : /weight\n<b>Chiều cao</b> : /height\n<b>Thời gian thức</b> : /waketime\n<b>Thời gian ngủ</b> : /sleeptime\n<b>Thông tin hiện tại</b> : /info', chatIdin);
            }
            /////////////////////////////////////////////////////////

            ///////////////////// Xử lý /info /////////////////////
            // text có dạng như: '/info'
            else if (text == "/info") {
                // @ts-ignore
                await sendMessage(`<b>Cân nặng</b> : <code>${await KV.get('WEIGHT')} kg</code>\n<b>Chiều cao</b> : <code>${await KV.get('HEIGHT')} cm</code>\n<b>Giờ thức</b> : <code>${await KV.get('HOUR_WAKE')}:${await KV.get('MINUTES_WAKE')}</code>\n<b>Giờ ngủ</b> : <code>${await KV.get('HOUR_SLEEP')}:${await KV.get('MINUTES_SLEEP')}</code>\n<b>Lượng nước cần uống (khoảng)</b> : <code>${await KV.get('waterIntake')} ml</code>\n<b>Lượng nước đã uống hôm nay</b> : <code>${await KV.get('drankWater')} ml</code>\n<b>Lượng nước mỗi lần uống</b> : <code>${await KV.get('WATER')} ml</code>`, chatIdin);
            }
            /////////////////////////////////////////////////////////

            ///////////////////// Xử lý /waketime /////////////////////
            // text có dạng như: '/waketime'
            else if (text == "/waketime") {
                await sendMessage('Set thời gian thức không thành công\nHãy dùng như ví dụ này: <code>/waketime 07:00</code>\nĐịnh dạng giờ là 24h nha người đẹp 😶‍🌫️', chatIdin);
            }
            // text có dạng như: '/waketime 7:00'
            else if (text.startsWith("/waketime ")) {
                // Lấy phần giá trị thời gian, waketime có giá trị '7:00'
                const waketime = text.split('/waketime ')[1];
                // Biểu thức chính quy dùng để kiểm tra thời gian đúng định dạng, copy GPT nên cũng hong biết giải thích sao
                const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
                // Kiểm tra chính quy
                if (!timeFormat.test(waketime)) {
                    await sendMessage('Set thời gian thức không thành công\nHãy dùng như ví dụ này: <code>/waketime 07:00</code>\nĐịnh dạng giờ là 24h nha người đẹp 😶‍🌫️', chatIdin);
                }
                else {
                    // Xử lý chuỗi và đưa vào bộ nhớ dài hạn KV
                    const wakeTimeParts = waketime.split(":");
                    // @ts-ignore
                    await KV.put('HOUR_WAKE', wakeTimeParts[0]);
                    // @ts-ignore
                    await KV.put('MINUTES_WAKE', wakeTimeParts[1]);
                    // Cập nhật lại thời gian reset mới
                    // @ts-ignore
                    const TIME_RESET = new Date(await KV.get('TIME_RESET'))
                    // @ts-ignore
                    TIME_RESET.setHours(parseInt(wakeTimeParts[0]));
                    // @ts-ignore
                    TIME_RESET.setMinutes(parseInt(wakeTimeParts[1]));
                    // @ts-ignore
                    await KV.put('TIME_RESET', TIME_RESET.toISOString());
                    // Debug
                    // console.log('Time reset là ', TIME_RESET.toLocaleString());
                    //
                    // @ts-ignore
                    await sendMessage('Set thời gian thức thành công, kể từ ngày mai sẽ áp dụng\nThời gian thức là: <code>' + await KV.get('HOUR_WAKE') + ':' + await KV.get('MINUTES_WAKE') + '</code> 🫡', chatIdin);
                }
            }
            /////////////////////////////////////////////////////////

            ///////////////////// Xử lý /sleeptime /////////////////////
            // text có dạng như: '/sleeptime'
            else if (text == "/sleeptime") {
                await sendMessage('Set thời gian ngủ không thành công\nHãy dùng như ví dụ này: <code>/sleeptime 22:00</code>\nĐịnh dạng giờ là 24h nha người đẹp 😶‍🌫️', chatIdin);
            }
            // text có dạng như: '/sleeptime 20:00'
            else if (text.startsWith("/sleeptime ")) {
                // Lấy phần giá trị thời gian, sleepTime có giá trị '23:00'
                const sleepTime = text.split('/sleeptime ')[1];
                // Biểu thức chính quy dùng để kiểm tra thời gian đúng định dạng, copy GPT nên cũng hong biết giải thích sao
                const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
                // Kiểm tra chính quy
                if (!timeFormat.test(sleepTime)) {
                    await sendMessage('Set thời gian ngủ không thành công\nHãy dùng như ví dụ này: <code>/sleeptime 22:00</code>\nĐịnh dạng giờ là 24h nha người đẹp 😶‍🌫️', chatIdin);
                }
                else {
                    // Xử lý chuỗi và đưa vào bộ nhớ dài hạn KV
                    const sleepTimeParts = sleepTime.split(":");
                    // @ts-ignore
                    await KV.put('HOUR_SLEEP', sleepTimeParts[0]);
                    // @ts-ignore
                    await KV.put('MINUTES_SLEEP', sleepTimeParts[1]);
                    // @ts-ignore
                    await sendMessage('Set thời gian ngủ thành công, kể từ ngày mai sẽ áp dụng\nThời gian ngủ là: <code>' + await KV.get('HOUR_SLEEP') + ':' + await KV.get('MINUTES_SLEEP') + '</code> 🫡', chatIdin);
                }
            }
            /////////////////////////////////////////////////////////

            ///////////////////// Xử lý /water /////////////////////
            // text có dạng như: '/water'
            else if (text == "/water") {
                await sendMessage('Set lượng nước cần uống một lần không thành công\nHãy dùng như ví dụ này: <code>/water 250</code>\nĐơn vị là <i>ml</i> 😶‍🌫️', chatIdin);
            }
            // text có dạng như: '/water 250'
            else if (text.startsWith("/water ")) {
                // Lấy phần giá trị nước, water_num có giá trị '250'
                const water_num = text.split('/water ')[1];
                // Biểu thức chính quy dùng để kiểm tra giá trị đúng định dạng, copy GPT nên cũng hong biết giải thích sao
                const numberFormat = /^(?:[1-9]\d{0,2}|1000)$/;
                // Kiểm tra chính quy
                if (!numberFormat.test(water_num)) {
                    await sendMessage('Set lượng nước cần uống một lần không thành công\nHãy dùng như ví dụ này: <code>/water 250</code>\nĐơn vị là <i>ml</i> 😶‍🌫️', chatIdin);
                }
                else {
                    // Đưa vào bộ nhớ dài hạn KV
                    // @ts-ignore
                    await KV.put('WATER', water_num);
                    // @ts-ignore
                    await sendMessage('Set lượng nước cần uống một lần thành công, lượng nước là: <code>' + await KV.get('WATER') + ' ml</code> 🫡', chatIdin);
                }
            }
            /////////////////////////////////////////////////////////

            ///////////////////// Xử lý /weight /////////////////////
            // text có dạng như: '/weight'
            else if (text == "/weight") {
                await sendMessage('Set cân nặng không thành công\nHãy dùng như ví dụ này: <code>/weight 60</code> hoặc <code>/weight 60.00</code>\nĐơn vị là <i>kg</i>, chữ số thập phân tối đa là 2 chữ số, phân cách bởi dấu . 😶‍🌫️', chatIdin);
            }
            // text có dạng như: '/weight 60'
            else if (text.startsWith("/weight ")) {
                // Lấy phần giá trị cân nặng, weight_num có giá trị '60'
                const weight_num = text.split('/weight ')[1];
                // Biểu thức chính quy dùng để kiểm tra giá trị đúng định dạng số thực hoặc số nguyên đều được, copy GPT nên cũng hong biết giải thích sao
                const check_weight = /^(?!0\d)(\d{1,2}(?:\.\d{1,2})?|[1-2]\d{2}(?:\.\d{1,2})?|300(?:\.0{1,2})?)$/;
                // Kiểm tra chính quy
                if (!check_weight.test(weight_num)) {
                    await sendMessage('Set cân nặng không thành công\nHãy dùng như ví dụ này: <code>/weight 60</code> hoặc <code>/weight 60.00</code>\nĐơn vị là <i>kg</i>, chữ số thập phân tối đa là 2 chữ số, phân cách bởi dấu . 😶‍🌫️', chatIdin);
                }
                else {
                    // Đưa vào bộ nhớ dài hạn KV
                    // @ts-ignore
                    await KV.put('WEIGHT', weight_num);
                    // @ts-ignore
                    await sendMessage('Set cân nặng thành công, cân nặng là: <code>' + await KV.get('WEIGHT') + ' kg</code> 🫡', chatIdin);
                }
            }
            /////////////////////////////////////////////////////////

            ///////////////////// Xử lý /height /////////////////////
            // text có dạng như: '/height'
            else if (text == "/height") {
                await sendMessage('Set chiều cao không thành công\nHãy dùng như ví dụ này: <code>/height 162</code> hoặc <code>/height 162.00</code>\nĐơn vị là <i>cm</i>, chữ số thập phân tối đa là 2 chữ số, phân cách bởi dấu . 😶‍🌫️', chatIdin);
            }
            // text có dạng như: '/height 165'
            else if (text.startsWith("/height ")) {
                // Lấy phần giá trị cân nặng, height_num có giá trị '165'
                const height_num = text.split('/height ')[1];
                // Biểu thức chính quy dùng để kiểm tra giá trị đúng định dạng số thực hoặc số nguyên đều được, copy GPT nên cũng hong biết giải thích sao
                const check_height = /^(?!0\d)(\d{1,2}(?:\.\d{1,2})?|[1-2]\d{2}(?:\.\d{1,2})?|300(?:\.0{1,2})?)$/;
                // Kiểm tra chính quy
                if (!check_height.test(height_num)) {
                    await sendMessage('Set chiều cao không thành công\nHãy dùng như ví dụ này: <code>/height 162</code> hoặc <code>/height 162.00</code>\nĐơn vị là <i>cm</i>, chữ số thập phân tối đa là 2 chữ số, phân cách bởi dấu . 😶‍🌫️', chatIdin);
                }
                else {
                    // Đưa vào bộ nhớ dài hạn KV
                    // @ts-ignore
                    await KV.put('HEIGHT', height_num);
                    // @ts-ignore
                    await sendMessage('Set chiều cao thành công, chiều cao là: <code>' + await KV.get('HEIGHT') + ' cm</code> 🫡', chatIdin);
                }
            }
            /////////////////////////////////////////////////////////

            ///////////////////// Xử lý tin nhắn bình thường /////////////////////
            else {
                await sendMessage('Người đẹp dùng /help để biết làm gì nha người đẹp 🥺', chatIdin);
            }
            /////////////////////////////////////////////////////////

        }
    }
    return new Response("OK"); // Doesn't really matter
}

// Nhận sự kiện có fetch gửi tới và gọi hàm xử lý
addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
})

// Nhận sự kiện có scheduled gửi tới và gọi hàm xử lý, scheduled đang set là 10 phút ping một lần
addEventListener("scheduled", (event) => {
    event.waitUntil(handleScheduled(event));
});

// Xử lý scheduled
// @ts-ignore
// @ts-ignore
async function handleScheduled(event) {
    // Hàm tính toán thời gian tiếp theo ún nước
    const getNextIntakeTime = async () => {
        // @ts-ignore
        const intervalMs = await KV.get('intervalHours') * 60 * 60 * 1000;
        // @ts-ignore
        let count = await KV.get('count')
        console.log('count hiện tại: ', count)
        // @ts-ignore
        const nextIntakeTime = new Date(await KV.get('WAKE_TIME')).getTime() + (count * intervalMs);
        return nextIntakeTime;
    };

    // Hàm gửi thông báo tới bbp đồng thời tăng biến count để hàm tính toán thời gian uống nước được thay đổi
    const sendNotification = async (nextIntakeTime) => {
        // @ts-ignore
        let count = await KV.get('count');
        count++;
        // @ts-ignore
        await KV.put('count', count);
        // Lấy random lời nhắn
        const random_mess = await getRandomReminders();
        console.log('Đã ' + new Date(nextIntakeTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) + ' rồi, ' + random_mess)
        const inline_keyboard = [
            [
                { "text": "Đánh dấu đã uống nước ❤️", "callback_data": "drank" }
            ]
        ];
        // @ts-ignore
        const last_message = await KV.get('last_message');
        const value_lass = last_message.split(':')
        await editMessage(value_lass[1], chatId, value_lass[0]);
        await sendMessage(random_mess, chatId, inline_keyboard, true);

    };

    // Lấy thời gian hiện tại và chuẩn hoá múi giờ sang +7
    const currentTime = new Date();
    currentTime.setHours(currentTime.getHours() + 7);
    console.log('Thời gian hiện tại: ', currentTime.toLocaleString());
    // Lấy thời gian uống nước tiếp theo
    const nextIntakeTime = await getNextIntakeTime();
    console.log('Thời gian uống nước: ', new Date(nextIntakeTime).toLocaleString());
    // @ts-ignore
    const count_check = await KV.get('count');
    // @ts-ignore
    // Kiểm tra nếu count mà nhỏ hơn numIntakes tức là chưa uống đủ nước
    const numIntakes_check = await KV.get('numIntakes');
    if (count_check < numIntakes_check) {
        // Kiểm tra nếu thời gian hiện tại lớn hơn hoặc bằng thời gian uống nước
        if (currentTime.getTime() >= nextIntakeTime) {
            await sendNotification(nextIntakeTime);
        }
    }
    // Ngược lại
    else {
        // Gửi lời khen
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        const check_reward = await KV.get('reward');
        if (check_reward == '0') {
            // @ts-ignore
            const water_today = await KV.get('drankWater');
            // @ts-ignore
            const water_need = await KV.get('WATER');
            if ((parseInt(numIntakes_check) * parseInt(water_need)) <= parseInt(water_today)) {
                const message_end = await getRandomEnd_reward();
                // @ts-ignore
                const last_message = await KV.get('last_message');
                const value_lass = last_message.split(':')
                await editMessage(value_lass[1], chatId, value_lass[0]);
                await sendMessage(message_end, chatId);
                // @ts-ignore
                await KV.put('reward', '1')
            }
            else{
                // @ts-ignore
                const last_message = await KV.get('last_message');
                const value_lass = last_message.split(':')
                await editMessage(value_lass[1], chatId, value_lass[0]);
                await sendMessage('Hôm nay bbp không uống đủ nước nhaaa, nếu không muốn thấy tin nhắn này nựa thì ngày mai nhớ uống đủ nước đó, bbp ngụ ngon 🥰', chatId);
                // @ts-ignore
                await KV.put('reward', '1')
            }
        }
        // Lấy thời gian bbp thức dậy vào ngày mai từ KV
        // @ts-ignore
        const TIME_RESET = new Date(await KV.get('TIME_RESET'))
        // So sánh nếu thời gian hiện tại >= thời gian bbp thức dậy sớm hơn 10 phút 
        if (currentTime.getTime() >= (TIME_RESET.getTime() - 600000)) {
            // Reset các giá trị, update lại ngày tháng cho các biến thời gian
            await updateGlobalValues();
        }
    }
}


////////END////////

