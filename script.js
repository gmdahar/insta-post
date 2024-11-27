document.addEventListener('DOMContentLoaded', function() {
    
    
    // Like functionality
    const likeIcon = document.getElementById('like-icon');
    let likeCount = 0;
    let isLiked = false;

    likeIcon.addEventListener('click', function() {
        isLiked = !isLiked;
        if (isLiked) {
            likeCount++;
           likeIcon.style.backgroundImage = "url('./heart-fill.svg')";

        } else {
            likeCount--;
            likeIcon.style.backgroundImage = "url('./heart.svg')";
        }
        console.log('Likes: ' + likeCount);
    });


    // Comment functionality
    const commentIcon = document.getElementById('comment-icon');
    const commentBox = document.getElementById('comment-box');
    const commentInput = document.getElementById('comment-input');
    const commentSection = document.getElementById('comment-section');

    commentIcon.addEventListener('click', function() {
        commentBox.style.display = 'block';
        commentInput.focus();
    });

    commentInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') 
            {
            const commentText = commentInput.value.trim();
            if (commentText !== '') {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.innerHTML = `<span>Papa_Ki_Pari</span> ${commentText}`;
                commentSection.appendChild(commentElement);
                commentInput.value = '';
                commentBox.style.display = 'none';
            }
        }
    });


    // Share functionality - Placeholder (does nothing)
    const shareIcon = document.querySelector('.share-icon');
    shareIcon.addEventListener('click', function() {
        alert('Share functionality is not implemented.');
    });

});