function openInvitation() {
    const invitation = document.getElementById("invitation");

    if (invitation) {
        invitation.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
