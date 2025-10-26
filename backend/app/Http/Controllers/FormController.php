<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\Form;

class FormController extends Controller
{
    /**
     * Display a listing of forms for the authenticated user.
     */
    public function index()
    {
        $forms = Form::where('user_id', Auth::id())
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'data' => $forms,
            'message' => 'Forms retrieved successfully'
        ]);
    }

    /**
     * Store a newly created form.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'structure' => 'required|array',
            'structure.sections' => 'required|array',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation Error',
                'errors' => $validator->errors()
            ], 422);
        }

        $form = Form::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'description' => $request->description,
            'structure' => $request->structure,
        ]);

        return response()->json([
            'success' => true,
            'data' => $form,
            'message' => 'Form created successfully'
        ], 201);
    }

    /**
     * Display the specified form.
     */
    public function show($id)
    {
        $form = Form::where('user_id', Auth::id())->findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $form,
            'message' => 'Form retrieved successfully'
        ]);
    }

    /**
     * Update the specified form.
     */
    public function update(Request $request, $id)
    {
        $form = Form::where('user_id', Auth::id())->findOrFail($id);

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'structure' => 'sometimes|required|array',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation Error',
                'errors' => $validator->errors()
            ], 422);
        }

        $form->update($request->only(['title', 'description', 'structure']));

        return response()->json([
            'success' => true,
            'data' => $form,
            'message' => 'Form updated successfully'
        ]);
    }

    /**
     * Remove the specified form.
     */
    public function destroy($id)
    {
        $form = Form::where('user_id', Auth::id())->findOrFail($id);
        $form->delete();

        return response()->json([
            'success' => true,
            'message' => 'Form deleted successfully'
        ]);
    }
}

