function latest(){
    var tweet = 'Read the Tweet <svg class="icon icon-tabler icon-tabler-brand-twitter" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path></svg>'
    var doc = 'Read the document <svg class="icon icon-tabler icon-tabler-file" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path></svg>'
    var release = 'Read the release <svg class="icon icon-tabler icon-tabler-file" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path></svg>'
    var video = 'Watch the video <svg class="icon icon-tabler icon-tabler-video" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"></path><rect x="3" y="6" width="12" height="12" rx="2"></rect></svg>'
    var article = 'Read the article <svg class="icon icon-tabler icon-tabler-external-link" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path><line x1="10" y1="14" x2="20" y2="4"></line><polyline points="15 4 20 4 20 9"></polyline></svg>'
    var data = 'See the data <svg class="icon icon-tabler icon-tabler-chart-line" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="4" y1="19" x2="20" y2="19"></line><polyline points="4 15 8 9 12 11 16 6 20 10"></polyline></svg>'
    var mind = 'Read the post <svg class="icon icon-tabler icon-tabler-bulb" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" style="color: #4f4f4f;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path><line x1="9.7" y1="17" x2="14.3" y2="17"></line></svg>'


    var l1 = "1"
    document.getElementById("title"+l1).innerHTML = 'Tom MacDonald and Ben Shapiro release new song, "FACTS"'
    document.getElementById("content"+l1).innerHTML = ''
    document.getElementById("content0"+l1).innerHTML = ''
    document.getElementById("link"+l1).innerHTML = 'Listen Now'
    document.getElementById("link"+l1).href = 'https://open.spotify.com/album/2aWJw4wM4FuXfZPoOGcg3i?si=HK-iRj1WRxmalglnr8MDDQ'
    document.getElementById("time"+l1).innerHTML = '1/26/23 12:18pm MST'
    document.getElementById("telegram"+l1).href = 'https://t.me/openteanews/206'
    document.getElementById("minds"+l1).href = 'https://www.minds.com/openteanews/'


    document.getElementById("rlink"+l1).innerHTML = ''
    document.getElementById("rlink"+l1).href = ''

    document.getElementById("rlink0"+l1).innerHTML = ''
    document.getElementById("rlink0"+l1).href = ''

    var l5 = "1"
        document.getElementById("title"+l5).innerHTML = 'FDIC Attorney pleads guilty to conspiring to exploit numerous children'
        document.getElementById("content"+l5).innerHTML = ''
        document.getElementById("content0"+l5).innerHTML = ''
        document.getElementById("link"+l5).innerHTML = release
        document.getElementById("link"+l5).href = 'https://www.justice.gov/opa/pr/federal-attorney-pleads-guilty-conspiring-sexually-exploit-numerous-children'
        document.getElementById("time"+l5).innerHTML = '1/24/24 1:56pm MST'
        document.getElementById("telegram"+l5).href = 'https://t.me/openteanews/'
        document.getElementById("minds"+l5).href = 'https://www.minds.com/openteanews/'


        document.getElementById("rlink"+l5).innerHTML = ''
        document.getElementById("rlink"+l5).href = ''

        document.getElementById("rlink0"+l5).innerHTML = ''
        document.getElementById("rlink0"+l5).href = ''

    var l4 = "11"
    document.getElementById("title"+l4).innerHTML = 'Philadelphia-area man sentenced for forging FDA letters'
    document.getElementById("content"+l4).innerHTML = 'Peter Stoll III sentenced to 12 months in prison and one year of surpervised release for forging two letters from the FDA, which lead to the illegal sale of medical equipment.'
    document.getElementById("content0"+l4).innerHTML = ''
    document.getElementById("link"+l4).innerHTML = release
    document.getElementById("link"+l4).href = 'https://www.justice.gov/opa/pr/former-employee-medical-device-manufacturer-sentenced-forging-two-fda-letters-led-illegal'
    document.getElementById("time"+l4).innerHTML = '1/24/24 1:09pm MST'
    document.getElementById("telegram"+l4).href = 'https://t.me/openteanews/205'
    document.getElementById("minds"+l4).href = 'https://www.minds.com/openteanews/'


    document.getElementById("rlink"+l4).innerHTML = ''
    document.getElementById("rlink"+l4).href = ''

    document.getElementById("rlink0"+l4).innerHTML = ''
    document.getElementById("rlink0"+l4).href = ''

    var l3 = "111"
    document.getElementById("title"+l3).innerHTML = 'Man sentenced to 39 months in prison for "hate crime" in church arson case.'
    document.getElementById("content"+l3).innerHTML = 'Darion Ray Sexton, 22, plead guilty.'
    document.getElementById("link"+l3).innerHTML = release
    document.getElementById("link"+l3).href = 'https://www.justice.gov/opa/pr/colorado-man-sentenced-church-arson-federal-hate-crime-case'
    document.getElementById("time"+l3).innerHTML = '1/23/24 8:18pm MST'
    document.getElementById("telegram"+l3).href = 'https://t.me/openteanews/204'
    document.getElementById("minds"+l3).href = 'https://www.minds.com/openteanews/'


    document.getElementById("rlink"+l3).innerHTML = ''
     document.getElementById("rlink"+l3).href = ''

    document.getElementById("rlink0"+l3).innerHTML = ''
    document.getElementById("rlink0"+l3).href = ''

    var l2 = "1111"
    document.getElementById("title"+l2).innerHTML = 'Robert F Kennedy jr has filed to run for president.'
    document.getElementById("content"+l2).innerHTML = ''
    document.getElementById("content0"+l2).innerHTML = ''
    document.getElementById("link"+l2).innerHTML = doc
    document.getElementById("link"+l2).href = 'https://docquery.fec.gov/cgi-bin/forms/P40011793/1696043/'
    document.getElementById("time"+l2).innerHTML = '4/5/23 5:17pm MST'
    document.getElementById("telegram"+l2).href = 'https://t.me/openteanews/203'
    document.getElementById("minds"+l2).href = 'https://www.minds.com/newsfeed/1490505225860026370'


    document.getElementById("rlink"+l2).innerHTML = ''
    document.getElementById("rlink"+l2).href = ''

    document.getElementById("rlink0"+l2).innerHTML = ''
    document.getElementById("rlink0"+l2).href = ''
























    /*https://tea.borgcreative.com/tags/telegram1.html */
}
