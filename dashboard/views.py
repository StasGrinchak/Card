from django.shortcuts import render


def dashbord(request):
    return render(request, 'dashboard/dashboard.html')