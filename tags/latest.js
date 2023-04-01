function latest(){
    var tweet = 'Read the Tweet <svg class="icon icon-tabler icon-tabler-brand-twitter" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path></svg>'
    var doc = 'Read the document <svg class="icon icon-tabler icon-tabler-file" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path></svg>'
    var release = 'Read the release <svg class="icon icon-tabler icon-tabler-file" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path></svg>'
    var video = 'Watch the video <svg class="icon icon-tabler icon-tabler-video" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"></path><rect x="3" y="6" width="12" height="12" rx="2"></rect></svg>'
    var article = 'Read the article <svg class="icon icon-tabler icon-tabler-external-link" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path><line x1="10" y1="14" x2="20" y2="4"></line><polyline points="15 4 20 4 20 9"></polyline></svg>'
    var data = 'See the data <svg class="icon icon-tabler icon-tabler-chart-line" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="19" x2="20" y2="19"></line><polyline points="4 15 8 9 12 11 16 6 20 10"></polyline></svg>'
    var mind = 'Read the post <svg class="icon icon-tabler icon-tabler-bulb" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" style="color: #4f4f4f;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path><line x1="9.7" y1="17" x2="14.3" y2="17"></line></svg>'

    var l1 = "1"
    document.getElementById("title"+l1).innerHTML = 'New York DA Office confirms it used ~$5,000 of federal funds in its investigation into Trump or the Trump Organization between October 2019 and August 2021'
    document.getElementById("content"+l1).innerHTML = ''
    document.getElementById("content0"+l1).innerHTML = ''
    document.getElementById("link"+l1).innerHTML = doc
    document.getElementById("link"+l1).href = 'https://www.scribd.com/document/635245507/Letter-Response-From-Manhattan-DA-Office-to-Chairmen?secret_password=vQnmIlHo7MisEjqFUnve#'
    document.getElementById("time"+l1).innerHTML = '3/31/23 5:08pm MST'
    document.getElementById("telegram"+l1).href = 'https://t.me/openteanews/198'
    document.getElementById("minds"+l1).href = 'https://www.minds.com/newsfeed/1488690804061900809'


    document.getElementById("rlink"+l1).innerHTML = ''
    document.getElementById("rlink"+l1).href = ''

    document.getElementById("rlink0"+l1).innerHTML = ''
    document.getElementById("rlink0"+l1).href = ''


var l5 = "11"
    document.getElementById("title"+l5).innerHTML = '"Justice Department and EPA File Complaint Against Norfolk Southern for Unlawful Discharge of Pollutants and Hazardous Substances in East Palestine Derailment"'
    document.getElementById("content"+l5).innerHTML = '-US Department of Justice'
    document.getElementById("content0"+l5).innerHTML = ''
    document.getElementById("link"+l5).innerHTML = release
    document.getElementById("link"+l5).href = 'https://www.justice.gov/opa/pr/justice-department-and-epa-file-complaint-against-norfolk-southern-unlawful-discharge'
    document.getElementById("time"+l5).innerHTML = '3/31/23 11:25am MST'
    document.getElementById("telegram"+l5).href = 'https://t.me/openteanews/196'
    document.getElementById("minds"+l5).href = 'https://www.minds.com/newsfeed/1488608286868508688'


    document.getElementById("rlink"+l5).innerHTML = ''
    document.getElementById("rlink"+l5).href = ''

    document.getElementById("rlink0"+l5).innerHTML = ''
    document.getElementById("rlink0"+l5).href = ''



    var l4 = "111"
    document.getElementById("title"+l4).innerHTML = 'AI Bias?'
    document.getElementById("content"+l4).innerHTML = 'In recent weeks, AI chat and prompt tools have become quite a popular discussion topic. These tools developers have said that the tools can be used to increase productivity and may even replace journalists. Due to this, we have taken a look into the possible biases that AI could have.'
    document.getElementById("content0"+l4).innerHTML = 'We have conducted research into AI bias, and we encourage you to review our interactions with the Bing AI.'
    document.getElementById("link"+l4).innerHTML = 'Read the documents'
    document.getElementById("link"+l4).href = 'https://www.openteanews.com/archive/2023/research/ai_bias/index.html'
    document.getElementById("time"+l4).innerHTML = '3/26/22 1:12pm MST'
    document.getElementById("telegram"+l4).href = 'https://t.me/openteanews/183'
    document.getElementById("minds"+l4).href = 'https://www.minds.com/newsfeed/1486827895916597260'


    document.getElementById("rlink"+l4).innerHTML = ''
    document.getElementById("rlink"+l4).href = ''

    document.getElementById("rlink0"+l4).innerHTML = ''
    document.getElementById("rlink0"+l4).href = '' 
    
    var l3 = "1111"
    document.getElementById("title"+l3).innerHTML = 'Twitters press contact email really does auto reply “💩”'
    document.getElementById("content"+l3).innerHTML = ''
    document.getElementById("link"+l3).innerHTML = tweet
    document.getElementById("link"+l3).href = 'https://twitter.com/openteanews/status/1638786884934713345'
    document.getElementById("time"+l3).innerHTML = '3/22/23 11:25pm MST'
    document.getElementById("telegram"+l3).href = 'https://t.me/openteanews/180'
    document.getElementById("minds"+l3).href = 'https://www.minds.com/openteanews/'


    document.getElementById("rlink"+l3).innerHTML = ''
     document.getElementById("rlink"+l3).href = ''

    document.getElementById("rlink0"+l3).innerHTML = ''
    document.getElementById("rlink0"+l3).href = ''


    var l2 = "11111"
    document.getElementById("title"+l2).innerHTML = 'Silicon Valley Bank (SVB) has collapsed; FDIC has taken control.'
    document.getElementById("content"+l2).innerHTML = 'SVB had ~$209 billion in total assets as of December 31st, 2022.'
    document.getElementById("content0"+l2).innerHTML = ''
    document.getElementById("link"+l2).innerHTML = ''
    document.getElementById("link"+l2).href = ''
    document.getElementById("time"+l2).innerHTML = '3/10/22 5:18pm MST'
    document.getElementById("telegram"+l2).href = 'https://t.me/openteanews/175'
    document.getElementById("minds"+l2).href = 'https://www.minds.com/openteanews/'


    document.getElementById("rlink"+l2).innerHTML = ''
    document.getElementById("rlink"+l2).href = ''

    document.getElementById("rlink0"+l2).innerHTML = ''
    document.getElementById("rlink0"+l2).href = ''


   










    


    

    /*https://tea.borgcreative.com/tags/telegram1.html */
}

