function showSkills(type) {
    document.getElementById('coding-skill').style.display = (type === 'coding') ? 'flex' : 'none';
    document.getElementById('it-skill').style.display = (type === 'it') ? 'flex' : 'none';
    
    // Mengatur tombol yang aktif
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function showProject(type) {
    document.getElementById('coding-project').style.display = (type === 'coding') ? 'block' : 'none';
    document.getElementById('it-project').style.display = (type === 'it') ? 'block' : 'none';
    
    // Mengatur tombol yang aktif
    document.querySelectorAll('.project-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}       
