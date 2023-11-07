<?php

namespace App\Livewire\Traits;

use Livewire\Attributes\On;

trait WithFields
{
    public bool $valid = false;

    // Declare $fields as an array with the names of the fields to validate

    #[On('fieldUpdated')]
    public function fieldUpdated($id, $value): void
    {
        $this->$id = $value;
        $this->valid = $this->validateFields();

        session()->put($id, $value);
    }

    public function validateFields(): bool
    {
        if (!isset($this->fields)) {
            return true;
        }

        foreach ($this->fields as $field) {
            if (!isset($this->$field) || strlen($this->$field) < 2) {
                return false;
            }
        }

        return true;
    }

    public function hydrateFields(): void
    {
        foreach ($this->fields as $field) {
            $this->$field = session()->get($field, '');
        }

        $this->valid = $this->validateFields();
    }
}

