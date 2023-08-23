// document.addEventListener('DOMContentLoaded', () => {
//     const sessionUsername = document.getElementById('session-username').value;
//     document.getElementById('username-display').textContent = `Welcome, ${sessionUsername}`;
    
//     const logoutLink = document.getElementById('logout-link');
//     logoutLink.addEventListener('click', () => {
//         fetch('/logout')
//             .then(response => {
//                 if (response.redirected) {
//                     window.location.href = response.url;
//                 }
//             });
//     });
//     const chatWindow = document.getElementById('chat-window');
// const userMessageInput = document.getElementById('user-message');
// const sendButton = document.getElementById('send-button');

// sendButton.addEventListener('click', handleUserInput);
// userMessageInput.addEventListener('keyup', function (event) {
//     if (event.key === 'Enter') {
//         handleUserInput();
//     }
// });

// function handleUserInput() {
//     const userMessage = userMessageInput.value.trim();
//     if (userMessage === '') {
//         return;
//     }

//     addUserMessage(userMessage);
//     userMessageInput.value = '';

//     const botResponse = getBotResponse(userMessage);
//     addBotMessage(botResponse);
// }

// function addUserMessage(message) {
//     const userBubble = createChatBubble(message, 'user');
//     chatWindow.appendChild(userBubble);
//     chatWindow.scrollTop = chatWindow.scrollHeight;
// }

// function addBotMessage(message) {
//     const botBubble = createChatBubble(message, 'bot');
//     chatWindow.appendChild(botBubble);
//     chatWindow.scrollTop = chatWindow.scrollHeight;
// }

// function createChatBubble(message, sender) {
//     const bubble = document.createElement('div');
//     bubble.className = `chat-bubble ${sender}-bubble`;
//     bubble.textContent = message;
//     return bubble;
// }

// function getBotResponse(userMessage) {
//     const responses = {
//         'hello': 'Hello! How can I assist you today?',
//         'how are you': "I'm just a bot, but I'm here to help!",
//         'bye': 'Goodbye! Have a great day!',
//         'aracetamol':'Paracetamol is a common pain killer. You can take them for aches and pains. It is also commonly used for reducing high temperature (fever).',
//         'Ibuprofen':'Ibuprofen is a non-steroidal anti-inflammatory drug (NSAID). It reduces inflammation, hence helps to decrease swelling, pain, or fever.',
//         'Antihistamine':'Antihistamines are medicines often used to relieve symptoms of allergies, such as hay fever, hives, conjunctivitis and reactions to insect bites or stings.',
        
//         // Add more question-answer pairs here
//         'default': 'I m here to help! Feel free to ask anything.'
//     };

//     const lowerCaseUserMessage = userMessage.toLowerCase();
//     return responses[lowerCaseUserMessage] || responses['default'];
// }
// // Your existing JavaScript code

// const medicationInfo = {
//     'paracetamol': 'Paracetamol is a common pain killer. You can take them for aches and pains. It is also commonly used for reducing high temperature (fever).',
//     'ibuprofen': 'Ibuprofen is a non-steroidal anti-inflammatory drug (NSAID). It reduces inflammation, hence helps to decrease swelling, pain, or fever.',
//     'antihistamine': 'Antihistamines are medicines often used to relieve symptoms of allergies, such as hay fever, hives, conjunctivitis and reactions to insect bites or stings.',
//     'indigestion treatment':'Heartburn and acid reflux are the same thing  when the acid from your stomach comes up to your throat. You’ll have a burning feeling when this happens. This can be a symptom of indigestion.',
//     'anti-diarrhoea remedy':'Diarrhoea is when you have frequent and liquid bowel movements. Many things can cause it, including viruses, bacteria and parasites, medicines such as antibiotics, digestive disorders such as coeliac disease or irritable bowel syndrome.',
//     'hydrocortisone cream':'Hydrocortisone creams, ointments – also known as steroid. They are used on the skin to treat swelling, itching and irritation – eczema, psoriasis, contact dermatitis, prickly heat rash, insect bites and stings etc.Hydrocortisone creams or ointments are available to buy at 0.1% to 1%.',
//     'Moisturiser':'Moisturisers or Emollients are applied directly to the skin to soothe and hydrate it. They cover the skin with a protective film to trap in moisture.',
//     'antacid':'If an individual experiences heartburn or pain or bloating, it is likely that the digestive acids present in the stomach are causing the problem. In such a case, an antacid can be taken to neutralize the harmful effects of acid and aid digestion. Different types of antacids available in the market include sodium bicarbonate, magnesium trisilicate, aluminium or magnesium hydroxide. These antacids can help overcome simple indigestion or constipation problems.',
//     'anti-sickness':'Anti-sickness medications such as domperidone and meclizine hydrochloride help in preventing and treating nausea and vomiting. These medications work by blocking the action of histamine, which can otherwise trigger the feeling of being sick. These medications can cause drowsiness, thus people must not drive or perform any activity that requires absolute concentration',
//     'aspirin':'Pain relief, reducing inflammation, and preventing blood clotting. Also used to manage heart conditions and reduce the risk of heart attack or stroke.',
//     'loratadine':'Antihistamine used to relieve allergy symptoms such as runny nose, sneezing, and itching.',
//     'cetirizine':'Antihistamine used to alleviate allergy symptoms, including hay fever and hives.',
//     'omeprazole':'Proton pump inhibitor to reduce stomach acid production. Used to treat conditions like GERD, acid reflux, and stomach ulcers.',
//     'simvastatin':'Statin medication to lower cholesterol levels and reduce the risk of cardiovascular events.',
//     'metformin':'Antidiabetic medication to manage type 2 diabetes by improving insulin sensitivity and controlling blood sugar levels.',
//     'amoxicillin':'Antibiotic used to treat bacterial infections like respiratory tract infections, ear infections, and urinary tract infections.',
//     'azithromycin':'Antibiotic used to treat a variety of bacterial infections, including respiratory and skin infections.',
//     'ciprofloxacin':'Antibiotic effective against various bacterial infections, including urinary tract and respiratory infections.',
//     'fluoxetine':'Selective serotonin reuptake inhibitor (SSRI) used to treat depression, anxiety, and obsessive-compulsive disorder.',
//     'lisinopril':'angiotensin-converting enzyme (ACE) inhibitor used to manage high blood pressure and heart failure',
//     };

// function getBotResponse(userMessage) {
//     const lowerCaseUserMessage = userMessage.toLowerCase();
//     const response = medicationInfo[lowerCaseUserMessage];
//     return response || "I'm here to help! Feel free to ask anything.";
// }

// });


document.addEventListener('DOMContentLoaded', () => {
    const sessionUsername = document.getElementById('session-username').value;
    document.getElementById('username-display').textContent = `Welcome, ${sessionUsername}`;
    
    const logoutLink = document.getElementById('logout-link');
    logoutLink.addEventListener('click', () => {
        fetch('/logout')
            .then(response => {
                if (response.redirected) {
                    window.location.href = response.url;
                }
            });
    });

    const chatWindow = document.getElementById('chat-window');
    const userMessageInput = document.getElementById('user-message');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', handleUserInput);
    userMessageInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            handleUserInput();
        }
    });

    function handleUserInput() {
        const userMessage = userMessageInput.value.trim();
        if (userMessage === '') {
            return;
        }

        addUserMessage(userMessage);
        userMessageInput.value = '';

        const botResponse = getBotResponse(userMessage);
        addBotMessage(botResponse);
    }

    function addUserMessage(message) {
        const userBubble = createChatBubble(message, 'user');
        chatWindow.appendChild(userBubble);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function addBotMessage(message) {
        const botBubble = createChatBubble(message, 'bot');
        chatWindow.appendChild(botBubble);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function createChatBubble(message, sender) {
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${sender}-bubble`;
        bubble.textContent = message;
        return bubble;
    }

    function getBotResponse(userMessage) {
        const lowerCaseUserMessage = userMessage.toLowerCase();
        const response = medicationInfo[lowerCaseUserMessage];
        return response || "I'm here to help! Feel free to ask anything.";
    }

function getBotResponse(userMessage) {
    const responses = {
        'hello': 'Hello! How can I assist you today?',
        'how are you': "I'm just a bot, but I'm here to help!",
        'bye': 'Goodbye! Have a great day!',
        'aracetamol':'Paracetamol is a common pain killer. You can take them for aches and pains. It is also commonly used for reducing high temperature (fever).',
        'Ibuprofen':'Ibuprofen is a non-steroidal anti-inflammatory drug (NSAID). It reduces inflammation, hence helps to decrease swelling, pain, or fever.',
        'Antihistamine':'Antihistamines are medicines often used to relieve symptoms of allergies, such as hay fever, hives, conjunctivitis and reactions to insect bites or stings.',
        'paracetamol': 'Paracetamol is a common pain killer. You can take them for aches and pains. It is also commonly used for reducing high temperature (fever).',
    'ibuprofen': 'Ibuprofen is a non-steroidal anti-inflammatory drug (NSAID). It reduces inflammation, hence helps to decrease swelling, pain, or fever.',
    'antihistamine': 'Antihistamines are medicines often used to relieve symptoms of allergies, such as hay fever, hives, conjunctivitis and reactions to insect bites or stings.',
    'indigestion treatment':'Heartburn and acid reflux are the same thing  when the acid from your stomach comes up to your throat. You’ll have a burning feeling when this happens. This can be a symptom of indigestion.',
    'anti-diarrhoea remedy':'Diarrhoea is when you have frequent and liquid bowel movements. Many things can cause it, including viruses, bacteria and parasites, medicines such as antibiotics, digestive disorders such as coeliac disease or irritable bowel syndrome.',
    'hydrocortisone cream':'Hydrocortisone creams, ointments – also known as steroid. They are used on the skin to treat swelling, itching and irritation – eczema, psoriasis, contact dermatitis, prickly heat rash, insect bites and stings etc.Hydrocortisone creams or ointments are available to buy at 0.1% to 1%.',
    'Moisturiser':'Moisturisers or Emollients are applied directly to the skin to soothe and hydrate it. They cover the skin with a protective film to trap in moisture.',
    'antacid':'If an individual experiences heartburn or pain or bloating, it is likely that the digestive acids present in the stomach are causing the problem. In such a case, an antacid can be taken to neutralize the harmful effects of acid and aid digestion. Different types of antacids available in the market include sodium bicarbonate, magnesium trisilicate, aluminium or magnesium hydroxide. These antacids can help overcome simple indigestion or constipation problems.',
    'anti-sickness':'Anti-sickness medications such as domperidone and meclizine hydrochloride help in preventing and treating nausea and vomiting. These medications work by blocking the action of histamine, which can otherwise trigger the feeling of being sick. These medications can cause drowsiness, thus people must not drive or perform any activity that requires absolute concentration',
    'aspirin':'Pain relief, reducing inflammation, and preventing blood clotting. Also used to manage heart conditions and reduce the risk of heart attack or stroke.',
    'loratadine':'Antihistamine used to relieve allergy symptoms such as runny nose, sneezing, and itching.',
    'cetirizine':'Antihistamine used to alleviate allergy symptoms, including hay fever and hives.',
    'omeprazole':'Proton pump inhibitor to reduce stomach acid production. Used to treat conditions like GERD, acid reflux, and stomach ulcers.',
    'simvastatin':'Statin medication to lower cholesterol levels and reduce the risk of cardiovascular events.',
    'metformin':'Antidiabetic medication to manage type 2 diabetes by improving insulin sensitivity and controlling blood sugar levels.',
    'amoxicillin':'Antibiotic used to treat bacterial infections like respiratory tract infections, ear infections, and urinary tract infections.',
    'azithromycin':'Antibiotic used to treat a variety of bacterial infections, including respiratory and skin infections.',
    'ciprofloxacin':'Antibiotic effective against various bacterial infections, including urinary tract and respiratory infections.',
    'fluoxetine':'Selective serotonin reuptake inhibitor (SSRI) used to treat depression, anxiety, and obsessive-compulsive disorder.',
    'lisinopril':'angiotensin-converting enzyme (ACE) inhibitor used to manage high blood pressure and heart failure',
   

        'default': 'I m here to help! Feel free to ask anything.'
    };

    const lowerCaseUserMessage = userMessage.toLowerCase();
    return responses[lowerCaseUserMessage] || responses['default'];
}
});
