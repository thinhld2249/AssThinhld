<template>
    <div class="about-page">
        <div class="about-header position-relative">
            <img src="https://static.wixstatic.com/media/ad420a_a2e071ce60fe498ea50d1a8d332a4c4b~mv2.jpg/v1/fill/w_1060,h_506,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad420a_a2e071ce60fe498ea50d1a8d332a4c4b~mv2.jpg"
                alt="Background" class="about-background w-100" />
            <img src="https://static.wixstatic.com/media/ad420a_d1da9539608c45e7aec90beb81f16e7e~mv2.jpg/v1/crop/x_248,y_0,w_2967,h_3413/fill/w_335,h_385,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-557608537.jpg"
                alt="Profile Picture" class="profile-pic" />
        </div>

        <div class="about-content container text-center col-7">
            <div class="about-me-details bg-white text-center py-4 mx-auto container col-10">
                <p class="cormon-font" style="font-size: 50px;">ABOUT ME</p>
                <p class="arial-font pt-5">
                    I'm a paragraph. Click here to add your own text and edit me. It’s
                    easy. Just click “Edit Text” or double click me to add your own
                    content and make changes to the font. Feel free to drag and drop me
                    anywhere you like on your page. I’m a great place for you to tell a
                    story and let your users know a little more about you.
                </p>
                <p class="arial-font pt-5">
                    This is a great space to write a long text about your company and your
                    services. You can use this space to go into a little more detail about
                    your company. Talk about your team and what services you provide. Tell
                    your visitors the story of how you came up with the idea for your
                    business and what makes you different from your competitors. Make your
                    company stand out and show your visitors who you are.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
}

.about-header {
    position: relative;
    width: 100%;
}

.about-background {
    object-fit: cover;
}

.profile-pic {
    position: absolute;
    bottom: -75px;
    left: 50%;
    transform: translateX(-50%);
}

.about-content {
    margin-top: 100px;
}

.about-me-details h1 {
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: bold;
}

.about-me-details p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 20px;
}

.arial-font {
    font-family: Arial, Helvetica, sans-serif;
}
</style>