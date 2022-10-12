from django.shortcuts import render
from .serializers import ReviewSerializer
from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from apps.items import serializers
from .models import Review

# Create your views here.

class ReviewList(generics.ListAPIView):
    queryset = Review.objects.order_by('-create_at').all()
    serializer_class = ReviewSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['item_id']


class ReviewAdd(generics.CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
