<?php
namespace Tests\Feature;
use App\User;
use Tests\TestCase;
class LoginTest extends TestCase
{
    protected $user;
    public function setUp(): void
    {
        parent::setUp();
        $this->user = factory(User::class)->create();
    }
    public function authenticate()
    {
        $this->postJson('/api/login', [
            'email' => $this->user->email,
            'password' => 'password',
        ])
        ->assertSuccessful()
        ->assertJsonStructure(['token', 'expires_in'])
        ->assertJson(['token_type' => 'bearer']);
    }
    public function fetch_the_current_user()
    {
        $this->actingAs($this->user)
            ->getJson('/api/user')
            ->assertSuccessful()
            ->assertJsonStructure(['id', 'name', 'email']);
    }
    public function log_out()
    {
        $token = $this->postJson('/api/login', [
            'email' => $this->user->email,
            'password' => 'password',
        ])->json()['token'];
        $this->postJson("/api/logout?token=$token")
            ->assertSuccessful();
        $this->getJson("/api/user?token=$token")
            ->assertStatus(401);
    }
}
