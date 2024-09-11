from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Documentation
from .serializers import DocumentationSerializer

@api_view(['GET'])
def get_all_documentation(request):
        all_documentation = Documentation.objects.all()
        serializer = DocumentationSerializer(all_documentation, many=True)
        return Response(serializer.data)