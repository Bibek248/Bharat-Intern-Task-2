
document.addEventListener('DOMContentLoaded', function () {
    // Sample blog post data (can be fetched from a backend)
    const posts = [
        {
            title: '1. Title: Beginners Guide to Healthy Eating',
            content: '<img src="food1.jpg" alt="Description of the image" width="300" height="200"><br>Embarking on a journey towards healthier eating habits is a transformative decision that can significantly impact your overall well-being.In todays world where dietary information bombards us from all directions, the concept of adopting a balanced and nutritious diet may seem overwhelming.However, navigating this path doesnt have to be complicated; it can be simplified through a series of effective guidelines designed to nourish your body and promote vitality At the core of healthy eating lies an emphasis on whole foods.These nutrient- dense staples, such as fruits, vegetables, whole grains, lean proteins, and healthy fats, form the foundation of a balanced diet.They provide essential vitamins, minerals, fiber, and antioxidants, supporting optimal health and well - being.By prioritizing whole foods, you can fuel your body with the nutrients it needs to thrive, while also enjoying a diverse and flavorful array of culinary options.'
        },
        {
            title: '2. Title: A Beginners Guide to Starting Your Fitness Journey:',
            content: '<img src="workout.jpg" alt="Description of the image" width="300" height="200"><br>Starting your fitness journey can be simple with this beginner-friendly workout routine: 1. Warm-Up: Spend 5-10 minutes on dynamic movements like arm circles and light jogging to prepare your body.  2. Strength Training: Do bodyweight exercises like squats, push-ups, lunges, and rows for 20-30 minutes, aiming for 2-3 sets of 8-12 reps each. 3.Cardio: Choose activities like walking or cycling for 15-20 minutes to improve heart health and burn calories.  4.Cool Down: Spend 5-10 minutes stretching major muscle groups to prevent injury and promote flexibility..'
        }
    ];

    const blogPostsContainer = document.getElementById('blog-posts');

    // Function to render blog posts
    function renderBlogPosts() {
        blogPostsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <div>${post.content}</div>
            `;
            blogPostsContainer.appendChild(postElement);
        });
    }

    renderBlogPosts();
});

