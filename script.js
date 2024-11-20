document.getElementById('generate').addEventListener('click', function(event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedIn = document.getElementById('linkedIn').value;

    const organization = document.getElementById('organization').value;
    const role = document.getElementById('role').value;
    const fromYear = document.getElementById('fromYear').value;
    const toYear = document.getElementById('toYear').value;
    const experienceDetails = document.getElementById('experienceDetails').value;

    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const passingYear = document.getElementById('passingYear').value;
    const cgpa = document.getElementById('cgpa').value;

    const softSkill1 = document.getElementById('softSkill1').value;
    const softSkill2 = document.getElementById('softSkill2').value;
    const softSkill3 = document.getElementById('softSkill3').value;

    const techSkill1 = document.getElementById('techSkill1').value;
    const techSkill2 = document.getElementById('techSkill2').value;
    const techSkill3 = document.getElementById('techSkill3').value;

    const language1 = document.getElementById('language1').value;
    const language2 = document.getElementById('language2').value;

    const cert1 = document.getElementById('cert1').value;
    const cert2 = document.getElementById('cert2').value;
    const cert3 = document.getElementById('cert3').value;

    // Create lists for skills and languages
    const softSkills = [softSkill1, softSkill2, softSkill3].filter(skill => skill.trim() !== "");
    const technicalSkills = [techSkill1, techSkill2, techSkill3].filter(skill => skill.trim() !== "");
    const languages = [language1, language2].filter(lang => lang.trim() !== "");
    const certifications = [cert1, cert2, cert3].filter(cert => cert.trim() !== "");

    // Generate Resume
    const resumeOutput = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Info:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> ${linkedIn}</p>

        <h3>Work Experience</h3>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>From Year:</strong> ${fromYear}</p>
        <p><strong>To Year:</strong> ${toYear}</p>
        <p><strong>Experience Details:</strong> ${experienceDetails}</p>

        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Passing Year:</strong> ${passingYear}</p>
        <p><strong>CGPA/Percentage:</strong> ${cgpa}</p>

        <h3>Skills</h3>
        <p><strong>Soft Skills:</strong></p>
        <ul>
            ${softSkills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
        <p><strong>Technical Skills:</strong></p>
        <ul>
            ${technicalSkills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>

        <h3>Languages</h3>
        <ul>
            ${languages.map(lang => `<li>${lang}</li>`).join('')}
        </ul>

        <h3>Certifications</h3>
        <ul>
            ${certifications.map(cert => `<li>${cert}</li>`).join('')}
        </ul>
    `;

    // Display resume
    document.getElementById('resume-output').innerHTML = resumeOutput;
});
