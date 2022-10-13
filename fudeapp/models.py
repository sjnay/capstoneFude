from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):
    place_name = models.CharField(max_length=60)
    food_name = models.CharField(max_length=60)
    food_img = models.CharField(max_length=500)
    food_review = models.TextField(max_length=50)
    food_rating = models.PositiveIntegerField(default=0,validators=[MinValueValidator(1),MaxValueValidator(10) ])
    created_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    
    def __str__(self):
        return self.place_name

    class Meta:
        ordering = ['-created_at']
